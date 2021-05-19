import React from 'react';

// components
import MyAccountContainer from 'components/Layout/MyAccountContainer';
import Search from 'components/search';

// styles
import styles from './my-orders.module.css';

const MyOrders = () => {
  return (
    <MyAccountContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header_text}>My Orders</h3>
          <Search searchTextStyle={{ maxWidth: '310px' }} containerStyle={{ flex: 2 }} />
        </div>
        <div className={styles.content}>
          <div className={styles.content_1}></div>
        </div>
      </div>
    </MyAccountContainer>
  );
};

export default MyOrders;
