import React, { useEffect, useState } from 'react';

// components
import MyAccountContainer from 'components/Layout/MyAccountContainer';
import Search from 'components/search';
import OrderCard from 'components/order-card';

// styles
import styles from './my-orders.module.css';
import { axiosClient } from 'service';
import apiUrl from 'service/apiURL';
import authHeader from 'utils/authHeader';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const resp = (await axiosClient.post(apiUrl.searchOrders, {}, authHeader())).data;
    console.log('resp', resp);

    if (resp) setOrders(resp.data);
  };
  useEffect(() => {
    getOrders();
  }, []);
  useEffect(() => {
    console.log('orders', orders);
  }, [orders]);
  return (
    <MyAccountContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header_text}>Orders</h3>
          {/* <Search searchTextStyle={{ maxWidth: '310px' }} containerStyle={{ flex: 2 }} /> */}
        </div>
        <div>
          {/* <OrderCard order={{ id: 2212412, date: Date.now(), customerName: 'test metin', details: [{ quantity: 3 }] }} /> */}
          {orders?.map((el) => {
            return <OrderCard order={el} />;
          })}
        </div>
      </div>
    </MyAccountContainer>
  );
};

export default MyOrders;
