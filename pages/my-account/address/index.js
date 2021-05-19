import React from 'react';
import MyAccountContainer from 'components/Layout/MyAccountContainer';

// components
import AddressCard from 'components/address-card';

import styles from './address.module.css';

const index = () => {
  return (
    <MyAccountContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header_text}>Address Infos</h3>
          <p className={styles.add_address}>
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
    </MyAccountContainer>
  );
};

export default index;
