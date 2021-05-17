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

const PasswordForget = ({ forgetPassword, user }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const isEmailValid = isEmail(email);
      if (!isEmailValid) {
        notify('error', 'Please type an valid email');
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
                <span className='dot'></span>Password Reset
              </h2>
            </div>

            <form className='signup-form'>
              <div className='form-group'>
                <label>Email</label>
                <input
                  type='email'
                  onChange={handleEmailChange}
                  className='form-control'
                  placeholder='Enter your email'
                  id='name'
                  name='email'
                />
              </div>

              <button onClick={handleSubmit} type='submit' className='btn btn-primary'>
                Reset Password
              </button>
              <Link href='/'>
                <a className='return-store'>or Return to Store</a>
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

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};

export default connect(mapStateToProps, { forgetPassword })(PasswordForget);
