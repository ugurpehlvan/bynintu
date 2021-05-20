import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

// components
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';
import Breadcrumb from 'components/Common/Breadcrumb';

// actions
import { resetPassword } from 'store/actions/actions';

// helpers
import notify from 'utils/notify';
import { translations } from 'resources';

const PasswordReset = ({ resetPassword, language }) => {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value.trim());
  }, []);

  const handleConfirmPasswordChange = useCallback((e) => {
    setConfirmPassword(e.target.value.trim());
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        notify('error', translations[language]['g52']);
        return;
      }

      resetPassword({
        token,
        password,
      });
    },
    [confirmPassword, password]
  );

  return (
    <>
      <Navbar />

      <Breadcrumb title={translations[language]['g54']} />

      <section className='signup-area ptb-60'>
        <div className='container'>
          <div className='signup-content'>
            <div className='section-title'>
              <h2>
                <span className='dot'></span>
                {translations[language]['g54']}
              </h2>
            </div>

            <form className='signup-form'>
              <div className='form-group'>
                <label>{translations[language]['g43']}</label>
                <input
                  type='password'
                  onChange={handlePasswordChange}
                  className='form-control'
                  placeholder={translations[language]['g44']}
                  id='password'
                  name='password'
                />
              </div>

              <div className='form-group'>
                <label>{translations[language]['g55']}</label>
                <input
                  type='password'
                  onChange={handleConfirmPasswordChange}
                  className='form-control'
                  placeholder={translations[language]['g56']}
                  id='confirm-password'
                  name='confirmPassword'
                />
              </div>

              <button onClick={handleSubmit} type='submit' className='btn btn-primary'>
                {translations[language]['g57']}
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

const mapStateToProps = (state) => {
  return {
    language: state.language.appLanguage,
  };
};

export default connect(mapStateToProps, { resetPassword })(PasswordReset);
