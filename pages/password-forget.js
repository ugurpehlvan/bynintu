import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

// components
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';
import Breadcrumb from 'components/Common/Breadcrumb';

// actions
import { forgetPassword } from 'store/actions/actions';

// helpers
import isEmail from 'utils/isEmail';
import notify from 'utils/notify';
import { translations } from 'resources';

const PasswordForget = ({ forgetPassword, language, user }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const isEmailValid = isEmail(email);
      if (!isEmailValid) {
        notify('error', translations[language]['g40']);
        return;
      }

      forgetPassword({ email });
    },
    [email]
  );

  return (
    <>
      <Navbar />

      <Breadcrumb title='Signup' />

      <section className='signup-area ptb-60'>
        <div className='container'>
          <div className='signup-content'>
            <div className='section-title'>
              <h2>
                <span className='dot'></span>
                {translations[language]['g49']}
              </h2>
            </div>

            <form className='signup-form'>
              <div className='form-group'>
                <label>{translations[language]['g24']}</label>
                <input
                  type='email'
                  onChange={handleEmailChange}
                  className='form-control'
                  placeholder={translations[language]['g42']}
                  id='name'
                  name='email'
                />
              </div>

              <button onClick={handleSubmit} type='submit' className='btn btn-primary'>
                {translations[language]['g50']}
              </button>
              <Link href='/'>
                <a className='return-store'>{translations[language]['g51']}</a>
              </Link>
            </form>
          </div>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth, language }) => {
  return {
    user: auth.user,
    language: language.appLanguage,
  };
};

export default connect(mapStateToProps, { forgetPassword })(PasswordForget);
