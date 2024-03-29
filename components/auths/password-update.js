import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

// components
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';
import Breadcrumb from 'components/Common/Breadcrumb';

// actions
import { updatePassword } from 'store/auth/actions';

// helpers
import notify from 'utils/notify';

const PasswordUpdate = ({ updatePassword }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setNewConfirmPassword] = useState('');

  const handleCurrentPasswordChange = useCallback((e) => {
    setCurrentPassword(e.target.value.trim());
  }, []);

  const handleNewPasswordChange = useCallback((e) => {
    setNewPassword(e.target.value.trim());
  }, []);

  const handleNewConfirmPasswordChange = useCallback((e) => {
    setNewConfirmPassword(e.target.value.trim());
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (newPassword !== confirmNewPassword) {
        notify('error', 'Passwords should match');
        return;
      }

      updatePassword({
        currentPassword,
        newPassword,
      }, (res) => {
        if (res) {
          notify('success', 'Password successfully updated');
        } else {
          notify('error', 'Error');
        }
      });
    },
    [currentPassword, newPassword]
  );

  return (
    <section style={{ display: 'flex', flex: '1 1 0px' }} className='signup-area'>
      <div className='container'>
        <div className='signup-content'>
          <div className='section-title'>
            <h2>
              <span className='dot'></span>Update Password
            </h2>
          </div>

          <form className='signup-form'>
            <div className='form-group'>
              <label>Current Password</label>
              <input
                type='password'
                onChange={handleCurrentPasswordChange}
                className='form-control'
                placeholder='Enter your current password'
                id='current-password'
                name='current-password'
              />
            </div>

            <div className='form-group'>
              <label>New Password</label>
              <input
                type='password'
                onChange={handleNewPasswordChange}
                className='form-control'
                placeholder='Enter your new password'
                id='password'
                name='password'
              />
            </div>

            <div className='form-group'>
              <label>Confirm New Password</label>
              <input
                type='password'
                onChange={handleNewConfirmPasswordChange}
                className='form-control'
                placeholder='Enter your new password again'
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
  );
};

export default connect(null, { updatePassword })(PasswordUpdate);
