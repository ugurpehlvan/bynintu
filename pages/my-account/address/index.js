import React, { useState, useEffect } from 'react';
import MyAccountContainer from 'components/Layout/MyAccountContainer';
import { connect } from 'react-redux';

// actions
import { searchAddress } from 'store/actions/country-actions';

// components
import AddressCard from 'components/address-card';
import AddressDialog from 'components/dialogs/address-dialog';

import styles from './address.module.css';

const index = ({ searchAddress, addresses }) => {
  const [addressDialogVisible, setAddressDialogVisible] = useState(false);

  const handleAddNewAddressClick = () => {
    setAddressDialogVisible(true);
  };

  const handleClose = () => {
    setAddressDialogVisible(false);
  };

  useEffect(() => {
    if (searchAddress) {
      searchAddress();
    }
  }, []);

  return (
    <MyAccountContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header_text}>Address Infos</h3>
          <p onClick={handleAddNewAddressClick} className={styles.add_address}>
            <i style={{ marginRight: '6px' }} className='fas fa-plus'></i>
            Add New Address
          </p>
        </div>
        <div className={`${styles.content} row`}>
          {addresses.map((address) => {
            return (
              <div key={address.id} className='col-lg-4 col-sm-6'>
                <AddressCard address={address} />
              </div>
            );
          })}
        </div>
      </div>
      <AddressDialog searchAddress={searchAddress} visible={addressDialogVisible} onClose={handleClose} />
    </MyAccountContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    addresses: state.country.addresses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchAddress: () => dispatch(searchAddress()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
