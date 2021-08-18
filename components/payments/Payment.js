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
            stripeKey='pk_live_51J2CNhJouClqQSpAb3qpcaW0m3GQvk9pfXnHHG2y7ynwZ2JJmHHRw0uAF72I7vsr7MLpCKIsef1n20hks6ZDQVxC001Ik7Pwa3'
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
