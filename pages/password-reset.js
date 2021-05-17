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

const PasswordReset = ({ resetPassword }) => {
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
  console.log('token1', token);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        notify('error', 'Passwords should match');
        return;
      }
      console.log('token2', token);
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

      <Breadcrumb title='Signup' />

      <section className='signup-area ptb-60'>
        <div className='container'>
          <div className='signup-content'>
            <div className='section-title'>
              <h2>
                <span className='dot'></span>Reset Password
              </h2>
            </div>

            <form className='signup-form'>
              <div className='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  onChange={handlePasswordChange}
                  className='form-control'
                  placeholder='Enter your password'
                  id='password'
                  name='password'
                />
              </div>

              <div className='form-group'>
                <label>Confirm Password</label>
                <input
                  type='password'
                  onChange={handleConfirmPasswordChange}
                  className='form-control'
                  placeholder='Enter your password again'
                  id='confirm-password'
                  name='confirmPassword'
                />
              </div>

              <button onClick={handleSubmit} type='submit' className='btn btn-primary'>
                Save
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

export default connect(null, { resetPassword })(PasswordReset);
