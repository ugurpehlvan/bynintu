import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// action
import { fetchCounries } from 'store/actions/actions';
import { createAddress } from 'store/actions/actions';

// component
import Dialog from 'reusables/modal/index';

const AddressDialog = ({ visible, onClose, fetchCounries, createAddress, user, countries }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [addressTitle, setAddressTitle] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'firstName') {
      const firstName = e.target.value;
      setFirstName(firstName);
    }
    if (e.target.name === 'lastName') {
      const lastName = e.target.value;
      setLastName(lastName);
    }
    if (e.target.name === 'phone') {
      const phone = e.target.value;
      setPhone(phone);
    }
    if (e.target.name === 'country') {
      const country = e.target.value;
      setCountry(country);
    }
    if (e.target.name === 'city') {
      const city = e.target.value;
      setCity(city);
    }
    if (e.target.name === 'zipCode') {
      const zipCode = e.target.value;
      setZipCode(zipCode);
    }
    if (e.target.name === 'addres') {
      const address = e.target.value;
      setAddress(address);
    }
    if (e.target.name === 'addressTitle') {
      const addressTitle = e.target.value;
      setAddressTitle(addressTitle);
    }
  };

  const handleSaveClick = (e) => {
    e.preventDefault();

    createAddress({
      userId: user?.id,
      name: addressTitle,
      firstName: firstName,
      lastName: lastName,
      type: 1,
      isDefault: false,
      countryId: 233,
      postalCode: zipCode,
      city: city,
      addressLine1: address?.substring(0, 50),
      addressLine2: address?.substring(50, 100),
      phone: phone,
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
                value={firstName}
                type='text'
                onChange={handleChange}
                className='form-control'
                placeholder='First Name'
                name='firstName'
              />
            </div>

            <div style={{ flex: '1 1 0px' }}>
              <label>Last Name *</label>
              <input
                value={lastName}
                type='text'
                onChange={handleChange}
                className='form-control'
                placeholder='Last Name'
                name='lastName'
              />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1 1 0px', marginRight: '8px' }}>
              <label>Phone *</label>
              <input value={phone} type='number' onChange={handleChange} className='form-control' placeholder='Phone' name='phone' />
            </div>

            <div style={{ flex: '1 1 0px' }}>
              <label>Country *</label>
              <input value={country} type='text' onChange={handleChange} className='form-control' placeholder='Country' name='country' />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1 1 0px', marginRight: '8px' }}>
              <label>City *</label>
              <input value={city} type='text' onChange={handleChange} className='form-control' placeholder='City' name='city' />
            </div>

            <div style={{ flex: '1 1 0px' }}>
              <label>Zip Code *</label>
              <input value={zipCode} type='number' onChange={handleChange} className='form-control' placeholder='Zip Code' name='zipCode' />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <label>Address *</label>
          <input value={address} type='text' onChange={handleChange} className='form-control' placeholder='Address' name='addres' />
        </div>

        <div className='form-group'>
          <label>Address Title *</label>
          <input
            value={addressTitle}
            type='text'
            onChange={handleChange}
            className='form-control'
            placeholder='Address Title'
            name='addressTitle'
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
  return {
    countries: state.country,
    user: state.auth.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCounries: () => dispatch(fetchCounries()),
    createAddress: (payload) => dispatch(createAddress(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressDialog);
