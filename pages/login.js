import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

// actions
import { signIn } from 'store/auth/actions';

// components
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

// helpers
import { translations } from 'resources';
import notify from '../utils/notify';
import isEmail from '../utils/isEmail';

const Login = ({ signIn, language }) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const isEmailValid = isEmail(email);
      if (!isEmailValid) {
        notify('error', translations[language]['g40']);
        return;
      }

      signIn(
        {
          email,
          password,
        },
        (route) => router.push(route)
      );
    },
    [email, password]
  );

  return (
    <>
      <Navbar />

      <Breadcrumb title={translations[language]['g41']} />

      <section className='login-area ptb-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='login-content'>
                <div className='section-title'>
                  <h2>
                    <span className='dot'></span> {translations[language]['g41']}
                  </h2>
                </div>

                <form className='login-form'>
                  <div className='form-group'>
                    <label>{translations[language]['g24']}</label>
                    <input
                      value={email}
                      type='email'
                      onChange={handleEmailChange}
                      className='form-control'
                      placeholder={translations[language]['g42']}
                      id='name'
                      name='name'
                    />
                  </div>

                  <div className='form-group'>
                    <label>{translations[language]['g43']}</label>
                    <input
                      value={password}
                      type='password'
                      onChange={handlePasswordChange}
                      className='form-control'
                      placeholder={translations[language]['g44']}
                      id='password'
                      name='password'
                    />
                  </div>

                  <button onClick={handleSubmit} className='btn btn-primary'>
                    {translations[language]['g41']}
                  </button>

                  <Link href='/password-forget'>
                    <a className='forgot-password'>{translations[language]['g45']}</a>
                  </Link>
                </form>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='new-customer-content'>
                <div className='section-title'>
                  <h2>
                    <span className='dot'></span> {translations[language]['g46']}
                  </h2>
                </div>

                <span>{translations[language]['g47']}</span>
                <p>{translations[language]['g48']}</p>
                <Link href='/signup'>
                  <a className='btn btn-light'>{translations[language]['g47']}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.customer,
    language: state.language.appLanguage,
  };
};

export default connect(mapStateToProps, { signIn })(Login);
