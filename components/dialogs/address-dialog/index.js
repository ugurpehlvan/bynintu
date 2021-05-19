import React from 'react';

// component
import Dialog from 'reusables/modal/index';

const index = ({ visible, onClose }) => {
  return (
    <Dialog visible={visible} onClose={onClose} title='Create New Address' size='small'>
      <form className='login-form' style={{ flex: '1 1 0px', padding: '0px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className='form-group'>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1 1 0px', marginRight: '8px' }}>
              <label>First Name *</label>
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
              <label>Last Name *</label>
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
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1 1 0px', marginRight: '8px' }}>
              <label>Phone *</label>
              <input
                // value={password}
                // type='password'
                // onChange={handlePasswordChange}
                className='form-control'
                placeholder='Phone'
                // id='password'
                // name='password'
              />
            </div>

            <div style={{ flex: '1 1 0px' }}>
              <label>Zip Code *</label>
              <input
                // value={password}
                // type='password'
                // onChange={handlePasswordChange}
                className='form-control'
                placeholder='Zip Code'
                // id='password'
                // name='password'
              />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1 1 0px', marginRight: '8px' }}>
              <label>City *</label>
              <input
                // value={password}
                // type='password'
                // onChange={handlePasswordChange}
                className='form-control'
                placeholder='City'
                // id='password'
                // name='password'
              />
            </div>

            <div style={{ flex: '1 1 0px' }}>
              <label>Country *</label>
              <input
                // value={password}
                // type='password'
                // onChange={handlePasswordChange}
                className='form-control'
                placeholder='Country'
                // id='password'
                // name='password'
              />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <label>Address</label>
          <input
            // value={password}
            // type='password'
            // onChange={handlePasswordChange}
            className='form-control'
            placeholder='Address'
            // id='password'
            // name='password'
          />
        </div>

        <div className='form-group'>
          <label>Address Title</label>
          <input
            // value={password}
            // type='password'
            // onChange={handlePasswordChange}
            className='form-control'
            placeholder='Address Title'
            // id='password'
            // name='password'
          />
        </div>
        <div style={{ display: 'flex', flex: '1 1 0px' }} />

        <button className='btn btn-primary'>Save</button>
      </form>
    </Dialog>
  );
};

export default index;
