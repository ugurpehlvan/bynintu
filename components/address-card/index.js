import React from 'react';

import styles from './address-card.module.css';

const AddressCard = ({ address, onDelete, onEdit }) => {
  return (
    <div className={styles.address_card}>
      <div className={styles.card_title}>
        <div>{address?.name}</div>
      </div>
      <div className={styles.card_detail}>
        <div>
          {address?.firstName} {address?.lastName}
        </div>
        <div className={styles.address_line}>{address?.addressLine1}</div>
        <div className={styles.address_line}>{address?.addressLine2}</div>
        <div>
          {address?.postalCode}, {address?.city}, {address?.country}
        </div>
        <div>{address?.phone}</div>
      </div>
      <div className={styles.card_action}>
        <div onClick={() => onDelete(address.id)} className={styles.card_action_delete}>
          <i style={{ marginRight: '6px' }} className='far fa-trash-alt'></i>
          <a>Delete</a>
        </div>
        <button onClick={() => onEdit(address.id)} className='btn btn-primary'>
          Edit
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
