import React from 'react';
import MyAccountContainer from 'components/Layout/MyAccountContainer';

import styles from './order-detail.module.css';

const OrderDetailHeader = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.header_content} row`}>
        <div style={{ display: 'flex', alignItems: 'center' }} className='col-lg-3'>
          <h3 className={styles.header_text}>Order Detail</h3>
        </div>
        <div className='col-lg-3'>
          <div className={styles.header_title}>Order Date</div>
          <div className={styles.header_description}>14 July</div>
        </div>
        <div className='col-lg-3'>
          <div className={styles.header_title}>Order No</div>
          <div className={styles.header_description}>1423123</div>
        </div>
        <div className='col-lg-3'>
          <div className={styles.header_title}>Order Summary</div>
          <div className={styles.header_description}>1 Delivery, 1 Product</div>
        </div>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  return (
    <MyAccountContainer>
      <OrderDetailHeader />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_1}></div>
          <div className={styles.content_2}>address</div>
        </div>
      </div>
    </MyAccountContainer>
  );
};

export default OrderDetails;
