import React from 'react';

import styles from './address-card.module.css';

const AddressCard = () => {
  return (
    <div className={styles.address_card}>
      <div className={styles.card_title}>
        <div>Evim</div>
      </div>
      <div className={styles.card_detail}>
        <div>Ugur Pehlivan</div>
        <div>Binevler mahallesi</div>
        <div>Batikent / Ankara</div>
        <div>506 092 27 00</div>
      </div>
      <div className={styles.card_action}>
        <div className={styles.card_action_delete}>
          <i style={{ marginRight: '6px' }} className='far fa-trash-alt'></i>
          <a>Delete</a>
        </div>
        <button className='btn btn-primary'>Edit</button>
      </div>
    </div>
  );
};

export default AddressCard;
