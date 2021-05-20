import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// action
import { fetchCounries } from 'store/actions/actions';
import { createAddress } from 'store/actions/actions';

// component
import Dialog from 'reusables/modal/index';

const AddressDialog = ({ visible, onClose, fetchCounries, createAddress }) => {
  const handleSaveClick = () => {
    createAddress({
      userId: 1,
      name: 'Ev adresim',
      firstName: 'Ayhan',
      lastName: 'Eryılmaz',
      type: 1,
      isDefault: false,
      countryId: 233,
      postalCode: '41200',
      city: 'Kocaeli',
      street: 'ali güven',
      addressLine1: 'max 50 character',
      addressLine2: 'max 50 character',
      phone: 'zorunlu değil',
      doorNumber: '23',
    });
  };

  useEffect(() => {
    fetchCounries();
  }, []);

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
          <label>Address *</label>
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
          <label>Address Title *</label>
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

        <button onClick={handleSaveClick} className='btn btn-primary'>
          Save
        </button>
      </form>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    countries: state.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCounries: () => dispatch(fetchCounries()),
    createAddress: (payload) => dispatch(createAddress(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressDialog);
