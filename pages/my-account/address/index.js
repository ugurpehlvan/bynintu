import React, { useState } from 'react';
import MyAccountContainer from 'components/Layout/MyAccountContainer';

// components
import AddressCard from 'components/address-card';
import AddressDialog from 'components/dialogs/address-dialog';

import styles from './address.module.css';

const index = () => {
  const [addressDialogVisible, setAddressDialogVisible] = useState(false);

  const handleAddNewAddressClick = () => {
    setAddressDialogVisible(true);
  };

  const handleClose = () => {
    setAddressDialogVisible(false);
  };

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
          <div className='col-lg-3 col-sm-6'>
            <AddressCard />
          </div>
          <div className='col-lg-3 col-sm-6'>
            <AddressCard />
          </div>
          <div className='col-lg-3 col-sm-6'>
            <AddressCard />
          </div>
        </div>
      </div>
      <AddressDialog visible={addressDialogVisible} onClose={handleClose} />
    </MyAccountContainer>
  );
};

export default index;
