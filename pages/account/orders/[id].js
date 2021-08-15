import React, { useEffect, useState } from 'react';
import MyAccountContainer from 'components/Layout/MyAccountContainer';
import { useRouter } from 'next/router';

import styles from './order-detail.module.css';
import apiUrl from 'service/apiURL';
import { axiosClient } from 'service';
import authHeader from 'utils/authHeader';

const OrderDetailHeader = (order) => {
  return (
    <div className={styles.header}>
      <div className={`${styles.header_content} row`}>
        <div style={{ display: 'flex', alignItems: 'center' }} className='col-lg-3'>
          <h3 className={styles.header_text}>Order Detail</h3>
        </div>
        <div className='col-lg-3'>
          <div className={styles.header_title}>Order Date</div>
          <div className={styles.header_description}>{new Date(order?.master?.date).toLocaleDateString()}</div>
        </div>
        <div className='col-lg-3'>
          <div className={styles.header_title}>Order No</div>
          <div className={styles.header_description}>{order?.master?.code}</div>
        </div>
        <div className='col-lg-3'>
          <div className={styles.header_title}>Order Summary</div>
          <div className={styles.header_description}>{order?.details?.reduce((p, c) => (p += c.quantity), 0)} Product</div>
        </div>
      </div>
    </div>
  );
};

const DeliveryCard = (detail) => {
  return (
    <div className={styles.delivery_card}>
      <div className={styles.delivery_card_image_container}>
        <img src={detail?.imageUrl} alt='' />
      </div>
      <div className={styles.delivery_card_content}>
        <div>
          <div className={styles.delivery_card_label}>{detail?.productTitle}</div>
          <div className={styles.delivery_card_desc}>{detail?.productSubTitle}</div>
        </div>
        <div className={styles.delivery_card_quantity}>
          {/* <strong>Size:</strong> Mat Sıyah , Tek Ebat - Adet: 1 */}
          {'Quantity: ' + detail.quantity}
        </div>
        <div className={styles.delivery_card_price_container}>
          <div className={styles.delivery_card_price}>{detail?.totalAmount + ' €'}</div>
          {/* <button className='btn btn-primary'>Rate Product</button> */}
        </div>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const id = useRouter().query?.id;
  const getOrder = async () => {
    const resp = (await axiosClient.get(apiUrl.fetchOrder + id, authHeader())).data;
    if (resp) setOrder(resp);
  };
  useEffect(() => {
    if (id) {
      getOrder();
      console.log('id', id);
    }
  }, [id]);

  useEffect(() => {
    console.log('order', order);
  }, [order]);
  return (
    <MyAccountContainer>
      {OrderDetailHeader(order)}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_1}>
            <div className='section-title'>
              <h2>
                <span className='dot'></span>Delivery Infos
              </h2>
            </div>
            <div>
              <div>{order?.master?.customerName}</div>
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
              <div>{order?.master?.totalAmount + '€'} </div>
            </div>
            <div className={styles.spacer} />
            <div className={styles.price_container}>
              <div>Shipping Price</div>
              <div>0 €</div>
            </div>
            <div className={styles.spacer} />
            <div className={styles.price_container}>
              <div>Total</div>
              <div>{order?.master?.totalAmount + '€'}</div>
            </div>
          </div>
        </div>
        <div className={styles.delivery_detail}>
          <div className={styles.delivery_detail_header}>
            <div>
              <div className={styles.delivery_no_label}>Delivery No:</div>
              <div className={styles.delivery_no}>#601042584</div>
            </div>
          </div>
          <div className={styles.delivery_detail_content}>
            <div className={styles.delivery_info}>
              <div className={styles.progress_bar}></div>
              {/* <div className={styles.delivery_status}>This product delivered on 1/4/2021.</div> */}
              {/* <div className={styles.delivery_cargo_company}>
                <div>Cargo Company: DHL</div>
              </div> */}
              {order?.details?.map?.((el) => DeliveryCard(el))}
            </div>
          </div>
        </div>
      </div>
    </MyAccountContainer>
  );
};

export default OrderDetails;
