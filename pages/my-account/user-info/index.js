import React from 'react';
import MyAccountContainer from 'components/Layout/MyAccountContainer';

// styles
import styles from './user-info.module.css';

const UserInfo = () => {
  return (
    <MyAccountContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header_text}>User Info</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.content_1}>
            <form className='login-form' style={{ flex: '1 1 0px', padding: '0px' }}>
              <div className='form-group'>
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: '1 1 0px', marginRight: '8px' }}>
                    <label>First Name</label>
                    <input
                      // value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className='form-control'
                      placeholder='First Name'
                      // id='password'
                      // name='password'
                    />
                  </div>

                  <div style={{ flex: '1 1 0px' }}>
                    <label>Last Name</label>
                    <input
                      // value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className='form-control'
                      placeholder='Last Name'
                      // id='password'
                      // name='password'
                    />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label>E-mail</label>
                <input
                  // value={password}
                  // type='password'
                  // onChange={handlePasswordChange}
                  className='form-control'
                  placeholder='E-mail'
                  // id='password'
                  // name='password'
                />
              </div>

              <div className='form-group'>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '8px', width: '90px' }}>
                    <label>Phone</label>
                    <input
                      // value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className='form-control'
                      placeholder='code'
                      // id='password'
                      // name='password'
                    />
                  </div>

                  <div style={{ flex: '1 1 0px' }}>
                    <label>&nbsp;</label>
                    <input
                      // value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className='form-control'
                      placeholder='444 ***00'
                      // id='password'
                      // name='password'
                    />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '8px', flex: '1 1 0px' }}>
                    <label>Birth Date</label>
                    <select
                      // value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className='form-control'
                      placeholder='code'
                      // id='password'
                      // name='password'
                    />
                  </div>

                  <div style={{ marginRight: '8px', flex: '1 1 0px' }}>
                    <label>&nbsp;</label>
                    <select
                      // value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className='form-control'
                      placeholder='444 ***00'
                      // id='password'
                      // name='password'
                    />
                  </div>

                  <div style={{ flex: '1 1 0px' }}>
                    <label>&nbsp;</label>
                    <select
                      //   value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className='form-control'
                      placeholder='444 ***00'
                      // id='password'
                      // name='password'
                    />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label>Gender</label>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
                    <input
                      type='checkbox'
                      // value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className={styles.check_input}
                      placeholder='code'
                      // id='password'
                      // name='password'
                    />
                    <div>Women</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type='checkbox'
                      // value={password}
                      // type='password'
                      // onChange={handlePasswordChange}
                      className={styles.check_input}
                      placeholder='444 ***00'
                      // id='password'
                      // name='password'
                    />
                    <div>Men</div>
                  </div>
                </div>
              </div>

              <button className='btn btn-primary'>Save</button>
            </form>
          </div>

          <div className={styles.content_2}>
            <form className='login-form'>
              <div className='form-group'>
                <label>Ad</label>
                <input
                  // value={password}
                  // type='password'
                  // onChange={handlePasswordChange}
                  className='form-control'
                  placeholder='Enter your password'
                  // id='password'
                  // name='password'
                />
              </div>
              <div className='form-group'>
                <label>Soyad</label>
                <input
                  // value={password}
                  // type='password'
                  // onChange={handlePasswordChange}
                  className='form-control'
                  placeholder='Enter your password'
                  // id='password'
                  // name='password'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </MyAccountContainer>
  );
};

export default UserInfo;
