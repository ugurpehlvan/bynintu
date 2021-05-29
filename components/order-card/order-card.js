import React from 'react';

import styles from './order-card.module.css';

const OrderCard = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.order_header} row`}>
        <div className='col-lg-3 col-md-6'>
          <div className={styles.header_title}>Order Date</div>
          <div className={styles.header_description}>14 July 11:04</div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className={styles.header_title}>Order Summary</div>
          <div className={styles.header_description}>1 Delivery, 1 Product</div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className={styles.header_title}>Reciver</div>
          <div className={styles.header_description}>Ugur Pehlivan</div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <button className={`btn btn-primary`} type='button'>
            Order Details
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.order_list}>
          <div className={styles.order_list_detail}>
            <div className={styles.order_status}>
              <i style={{ marginRight: '8px' }} className='fas fa-check'></i> Delivered
            </div>
            <div className={styles.order_description}>1 product was delivered on July 20.</div>
          </div>
          <div className={styles.order_image_container}>
            <div className={styles.order_image}>
              <img src='https://cdn.dsmcdn.com/assets/product/media/images/20190924/11/257972/56895471/1/1_org.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
