import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import OrderSummary from './OrderSummary';
import Payment from '../payments/Payment';
import useForm from './userForm';

import { EditOutlined } from '@ant-design/icons';

// styles
import styles from './checkoutform.module.css';

function CheckoutForm({ total, shipping }) {
  function handleSubmit() {
    console.log('Form submitted.');
  }

  let totalAmount = (total + shipping).toFixed(2);

  const stateSchema = {
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    address: { value: '', error: '' },
    city: { value: '', error: '' },
    state: { value: '', error: '' },
    zip: { value: '', error: '' },
    email: { value: '', error: '' },
    phone: { value: '', error: '' },
  };

  const validationStateSchema = {
    firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: 'Invalid first name format.',
      },
    },

    lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: 'Invalid last name format.',
      },
    },

    address: {
      required: true,
      validator: {
        error: 'Invalid address format.',
      },
    },

    city: {
      required: true,
      validator: {
        error: 'Invalid last name format.',
      },
    },

    state: {
      required: true,
      validator: {
        error: 'Invalid last name format.',
      },
    },

    zip: {
      required: true,
      validator: {
        regEx: /^\d{5}$|^\d{5}-\d{4}$/,
        error: 'Invalid zip format, use like 12345.',
      },
    },

    email: {
      required: true,
      validator: {
        regEx:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: 'Invalid email format.',
      },
    },

    phone: {
      required: true,
      validator: {
        regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
        error: 'Invalid phone number format use like +2923432432432.',
      },
    },
  };

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(stateSchema, validationStateSchema, handleSubmit);

  const errorStyle = {
    color: 'red',
    fontSize: '13px',
  };

  return (
    <section className='checkout-area ptb-60'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='user-actions'>
              <i className='fas fa-sign-in-alt'></i>
              <span>
                Returning customer? <Link href='#'>Click here to login</Link>
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleOnSubmit}>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='billing-details'>
                <h3 className='title'>Billing Address</h3>

                <div className='row'>
                  <div className={styles.address_card}>
                    <div className={styles.address_actions}>
                      <div className={styles.radio}>
                        <input type='radio' id='address' name='address' value='address' />
                        <EditOutlined className={styles.edit_icon} />
                      </div>
                    </div>
                    <div className={styles.address_container}>
                      <span className={styles.name}>Ugur Pehlivan</span>
                      <span>506*****00</span>
                      <span className={styles.address_line}>
                        Binevler Mah Binevler mahallesi 81052 nolu sokak, No: 39 Kardelen Apt. Giris kat, daire 2 sahinbey/ Gaziantep
                      </span>
                      <span>Şahinbey/ Gaziantep </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='order-details'>
                <h3 className='title'>Your Order</h3>

                <OrderSummary />

                <div className='payment-method'>
                  <p>
                    <input type='radio' id='direct-bank-transfer' name='radio-group' defaultChecked={true} />
                    <label htmlFor='direct-bank-transfer'>Direct Bank Transfer</label>
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                  <p>
                    <input type='radio' id='paypal' name='radio-group' />
                    <label htmlFor='paypal'>PayPal</label>
                  </p>
                  <p>
                    <input type='radio' id='cash-on-delivery' name='radio-group' />
                    <label htmlFor='cash-on-delivery'>Cash on Delivery</label>
                  </p>
                </div>

                <Payment amount={totalAmount * 100} disabled={disable} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    total: state.other.total,
    shipping: state.other.shipping,
  };
};

export default connect(mapStateToProps)(CheckoutForm);
