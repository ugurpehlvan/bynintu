import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// action
import { fetchCountries, createAddress, resetAddressState, updateAddress } from 'store/account/actions';

// component
import Dialog from 'reusables/modal/index';
import notify from 'utils/notify';

// styles
import styles from './address-dialog.module.css';

const AddressDialog = ({
  cardData,
  visible,
  onClose,
  fetchCountries,
  searchAddress,
  createAddress,
  user,
  countries = [],
  resetAddressState,
  updateAddress,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(-1);
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
      const country = Number(e.target.value);
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

    if (!firstName) {
      notify('error', 'Name field can not be empty!');
      return;
    }

    if (!lastName) {
      notify('error', 'Name field can not be empty!');
      return;
    }

    if (!addressTitle) {
      notify('error', 'Please name your address!');
      return;
    }

    if (!country) {
      notify('error', 'Please select a country!');
      return;
    }

    if (!zipCode) {
      notify('error', 'Please enter your zip code!');
      return;
    }

    if (!city) {
      notify('error', 'Please enter your city!');
      return;
    }

    if (!address) {
      notify('error', 'Please type your address!');
      return;
    }

    if (!phone) {
      notify('error', 'Please type your phone!');
      return;
    }

    let _address = address.split(' ');

    let fullAddress = [];
    let calcStr = '';

    for (let a = 0; a < _address?.length; a++) {
      calcStr += ' ' + _address[a];

      if (calcStr.length > 50) {
        const str = calcStr.replace(_address[a], '');
        fullAddress.push(str);
        calcStr = _address[a];
      } else if (calcStr.length && a === _address.length - 1) {
        fullAddress.push(calcStr);
      }
    }

    if (!cardData) {
      createAddress(
        {
          userId: user?.id,
          name: addressTitle,
          firstName: firstName,
          lastName: lastName,
          type: 1,
          isDefault: false,
          countryId: country,
          postalCode: zipCode,
          city: city,
          addressLine1: fullAddress[0],
          addressLine2: fullAddress[1],
          phone: phone,
        },
        (res) => {
          if (!res.error) {
            if (onClose) {
              onClose();
              searchAddress();
              notify('success', 'Address successfully saved!');
            }
          }
        }
      );
    } else {
      updateAddress({
        id: cardData.id,
        payload: {
          userId: user?.id,
          name: addressTitle,
          firstName: firstName,
          lastName: lastName,
          type: 1,
          isDefault: false,
          countryId: country,
          postalCode: zipCode,
          city: city,
          addressLine1: fullAddress[0],
          addressLine2: fullAddress[1],
          phone: phone,
        },
        callback: (res) => {
          if (!res.error) {
            if (onClose) {
              onClose();
              searchAddress();
              notify('success', 'Address successfully updated!');
            }
          }
        },
      });
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
      setFirstName('');
      setLastName('');
      setPhone('');
      setCountry('');
      setCity('');
      setZipCode('');
      setAddress('');
      setAddressTitle('');
      resetAddressState();
    }
  };

  useEffect(() => {
    fetchCountries({
      filter: {
        fields: [{ condition: 'equal', value: true, dataField: 'euMember' }],
        page: {
          size: 30,
          number: 1,
        },
        sort: 'name',
      },
    });
  }, [fetchCountries]);

  useEffect(() => {
    if (cardData) {
      setFirstName(cardData?.firstName);
      setLastName(cardData?.lastName);
      setPhone(cardData?.phone);
      setCountry(cardData?.countryId);
      setCity(cardData?.city);
      setZipCode(cardData?.postalCode);
      setAddress(cardData?.addressLine1 + ' ' + cardData?.addressLine2);
      setAddressTitle(cardData?.name);
    }
  }, [cardData]);

  return (
    <Dialog visible={visible} onClose={handleClose} title='Create New Address' size='small'>
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
              <select value={country} type='text' onChange={handleChange} className={`form-control ${styles.select}`} name='country'>
                <option value={-1} style={{ display: 'none' }}></option>
                {countries?.map((el) => (
                  <option className={styles.select_option} key={el.id} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
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
              <input value={zipCode} onChange={handleChange} className='form-control' placeholder='Zip Code' name='zipCode' />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <label>Address *</label>
          <textarea
            value={address}
            type='text'
            style={{ padding: '15px', height: '65px' }}
            maxLength='100'
            onChange={handleChange}
            className='form-control'
            placeholder='Address'
            name='addres'
          />
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
    countries: state.account.countries,
    user: state.auth.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: (payload) => dispatch(fetchCountries(payload)),
    createAddress: (payload, callback) => dispatch(createAddress(payload, callback)),
    resetAddressState: () => dispatch(resetAddressState()),
    updateAddress: (payload) => dispatch(updateAddress(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressDialog);
