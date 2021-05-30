import React from 'react';

// components
import MyAccountContainer from 'components/Layout/MyAccountContainer';
import Search from 'components/search';
import OrderCard from 'components/order-card';

// styles
import styles from './my-orders.module.css';

const MyOrders = () => {
  return (
    <MyAccountContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header_text}>Orders</h3>
          <Search searchTextStyle={{ maxWidth: '310px' }} containerStyle={{ flex: 2 }} />
        </div>
        <div>
          <OrderCard />
        </div>
      </div>
    </MyAccountContainer>
  );
};

export default MyOrders;
