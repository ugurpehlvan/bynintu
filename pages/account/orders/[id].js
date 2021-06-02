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

const DeliveryCard = () => {
  return (
    <div className={styles.delivery_card}>
      <div className={styles.delivery_card_image_container}>
        <img src='https://cdn.dsmcdn.com/assets/product/media/images/20190924/11/257972/56895471/1/1_org_zoom.jpg' alt='' />
      </div>
      <div className={styles.delivery_card_content}>
        <div>
          <div className={styles.delivery_card_label}>Moov</div>
          <div className={styles.delivery_card_desc}>Moov SIMONE Oyuncu ve Gece Sürüş Gözlüğü</div>
        </div>
        <div className={styles.delivery_card_quantity}>
          <strong>Size:</strong> Mat Sıyah , Tek Ebat - Adet: 1
        </div>
        <div className={styles.delivery_card_price_container}>
          <div className={styles.delivery_card_price}>440 TL</div>
          <button className='btn btn-primary'>Rate Product</button>
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
          <div className={styles.content_1}>
            <div className='section-title'>
              <h2>
                <span className='dot'></span>Delivery Infos
              </h2>
            </div>
            <div>
              <div>Ugur Pehlivan</div>
              <div className={styles.address}>Binevler Mah Binevler mahallesi 81052 nolu sokak, No: 39 Kardelen Apt. Giris kat daire 2</div>
              <div>Şahinbey / Gaziantep</div>
            </div>
          </div>
          <div className={styles.content_2}>
            <div className='section-title'>
              <h2>
                <span className='dot'></span>Payment Infos
              </h2>
            </div>
            <div className={styles.price_container}>
              <div>List Price</div>
              <div>30 €</div>
            </div>
            <div className={styles.spacer} />
            <div className={styles.price_container}>
              <div>Shipping Price</div>
              <div>4 €</div>
            </div>
            <div className={styles.spacer} />
            <div className={styles.price_container}>
              <div>Total</div>
              <div>34 €</div>
            </div>
          </div>
        </div>
        <div className={styles.delivery_detail}>
          <div className={styles.delivery_detail_header}>
            <div>
              <div className={styles.delivery_no_label}>Teslimat No:</div>
              <div className={styles.delivery_no}>#601042584</div>
            </div>
          </div>
          <div className={styles.delivery_detail_content}>
            <div className={styles.delivery_info}>
              <div className={styles.progress_bar}></div>
              <div className={styles.delivery_status}>This product delivered on 1/4/2021.</div>
              <div className={styles.delivery_cargo_company}>
                <div>Cargo Company: DHL</div>
              </div>
              <DeliveryCard />
            </div>
          </div>
        </div>
      </div>
    </MyAccountContainer>
  );
};

export default OrderDetails;
