import React, { useState, useEffect } from 'react';
import MyAccountContainer from 'components/Layout/MyAccountContainer';
import { connect } from 'react-redux';
import { Modal } from 'antd';

// actions
import { searchAddress, deleteAddress, getAddress } from 'store/actions/country-actions';

// components
import AddressCard from 'components/address-card';
import AddressDialog from 'components/dialogs/address-dialog';
import notify from 'utils/notify';

import styles from './address.module.css';

const index = ({ searchAddress, addresses, deleteAddress, getAddress }) => {
  const [addressDialogVisible, setAddressDialogVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addressID, setAddressID] = useState(false);

  const handleOk = () => {
    deleteAddress(addressID, (response) => {
      if (!response.error) {
        notify('success', 'Address successfuly deleted');
        searchAddress();
        setIsModalVisible(false);
      } else {
        notify('error', response.error.message);
      }
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteClick = (id) => {
    setIsModalVisible(true);
    setAddressID(id);
  };

  const handleEditClick = (id) => {
    getAddress(id);
  };

  const handleAddNewAddressClick = () => {
    setAddressDialogVisible(true);
  };

  const handleClose = () => {
    setAddressDialogVisible(false);
  };

  useEffect(() => {
    if (searchAddress) {
      searchAddress();
    }
  }, []);

  return (
    <MyAccountContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header_text}>Address Infos</h3>
          <p onClick={handleAddNewAddressClick} className={styles.add_address}>
            <i style={{ marginRight: '6px' }} className='fas fa-plus'></i>
            Add New Address
          </p>
        </div>
        <div className={`${styles.content} row`}>
          {addresses?.map((address) => {
            return (
              <div key={address.id} className='col-lg-4 col-sm-6'>
                <AddressCard address={address} onDelete={handleDeleteClick} onEdit={handleEditClick} />
              </div>
            );
          })}
        </div>
      </div>
      <AddressDialog searchAddress={searchAddress} visible={addressDialogVisible} onClose={handleClose} />
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Are you sure you want to delete this address?
      </Modal>
    </MyAccountContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    addresses: state.country.addresses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchAddress: () => dispatch(searchAddress()),
    deleteAddress: (id, callback) => dispatch(deleteAddress(id, callback)),
    getAddress: (id) => dispatch(getAddress(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
