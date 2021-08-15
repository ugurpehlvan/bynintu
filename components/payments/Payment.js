import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { resetCard } from '../../store/actions/actions';

class Payments extends React.Component {
  handleClick = () => {
    this.props.resetCard();
    toast.success('Order has been confirmed', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(function () {
      Router.push('/thankyou');
    }, 3000);
  };
  render() {
    let { amount } = this.props;
    const onToken = async (token) => {
      const body = {
        amount: amount,
        token: token,
      };
      await axios.post('/api/stripe/checkout', body);
    };

    return (
      <>
        <div className='order-btn'>
          <StripeCheckout
            name='Bynintu'
            description='Bynintu'
            amount={amount}
            currency='USD'
            token={onToken}
            stripeKey='pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7'
            billingAddress={false}
            closed={this.handleClick}
          >
            <button disabled={this.props.disabled} className={`btn btn-primary ${this.props.disabled ? 'btn-disabled' : ''}`}>
              Place Order
            </button>
          </StripeCheckout>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetCard: () => {
      dispatch(resetCard());
    },
  };
};

export default connect(null, mapDispatchToProps)(Payments);
