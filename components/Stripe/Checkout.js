import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { resetCard } from 'store/actions/actions';

// import './index.css';

import { axiosClient } from 'service';
import authHeader from 'utils/authHeader';
import apiUrl from 'service/apiURL';

function Checkout({ total, address, currency, items, resetCard }) {
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = total * 100;
  console.log('amount', amount);

  const stripeIntent = async () => {
    const response = await axiosClient.post(apiUrl.stripeCheckoutIntent, { amount, currency, items, address }, authHeader());
    setClientSecret(response.data.client_secret);
  };

  useEffect(() => {
    stripeIntent();
  }, []);

  const confirmPayment = async () => {
    console.log('clientSecret', clientSecret);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'metin',
        },
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
      console.log('[error]', payload.error);
    } else {
      setError(null);
      setSucceeded(true);
      setProcessing(false);
      setMetadata(payload.paymentIntent);
      await axiosClient.post(apiUrl.stripeCheckoutSuccess, { paymentData: payload.paymentIntent, items, address }, authHeader());
      resetCard();
      //ödeme tamamlandı yönlendirme yapılacak
      //test kartı 4000 0027 6000 3184 hertürlü  tarih ce ccv yi kabul eder
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    confirmPayment();
    // Step 3: Use clientSecret from PaymentIntent and the CardElement
    // to confirm payment with stripe.confirmCardPayment()
  };

  const renderSuccess = () => {
    return (
      // <div className={styles['sr-field-success']}>
      <div className={'sr-field-success'}>
        <h1>Your test payment succeeded</h1>
        <p>View PaymentIntent response:</p>
        {/* <pre className={styles['sr-callout']}> */}
        <pre className={'sr-callout'}>
          <code>{JSON.stringify(metadata, null, 2)}</code>
        </pre>
      </div>
    );
  };

  const renderForm = () => {
    const options = {
      style: {
        base: {
          color: '#32325d',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a',
        },
      },
      hidePostalCode: true,
    };

    return (
      <form>
        <h1>
          {currency.toLocaleUpperCase()} {amount / 100}
        </h1>

        {/* <div className={styles['sr-combo-inputs']}> */}
        {/* <div className={styles['sr-combo-inputs-row']}> */}
        <input type='text' id='name' name='name' placeholder='Name' autoComplete='cardholder' className={'sr-input'} />
        {/* </div> */}

        {/* <div className={`${styles['sr-combo-inputs-row']}`}> */}
        <CardElement hidePostalCode='true' className={'sr-input sr-card-element'} options={options} />
        {/* </div> */}
        {/* </div> */}

        {error && <div className={`message ${'sr-field-error'}`}>{error}</div>}

        <button onClick={handleSubmit} className={'sr-btn'} disabled={processing || !clientSecret || !stripe}>
          {processing ? 'Processing…' : 'Pay'}
        </button>
      </form>
    );
  };

  return (
    <div>
      <div className={'sr-payment-form'}>
        <div className={'sr-form-row'} />
        {succeeded ? renderSuccess() : renderForm()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: state.other.total,
    items: state.other.cardItems,
    shipping: state.other.shipping,
    addresses: state.account.addresses,
  };
};

export default connect(mapStateToProps, { resetCard })(Checkout);
