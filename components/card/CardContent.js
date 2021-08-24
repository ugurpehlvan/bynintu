import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import CardProduct from './CardProduct';
import { ToastContainer, toast, Slide } from 'react-toastify';

class CardContent extends Component {
  // componentWillUnmount() {
  //     if(this.refs.shipping.checked)
  //         this.props.substractShipping()
  // }

  handleCheckOutClick = (e) => {
    e.preventDefault();

    if (localStorage.getItem('token')) {
      Router.push('/checkout');
    } else {
      toast.success('In order to proceed to the payment step, you must first log in. You are redirecting to login page', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      Router.push('/login');
    }
  };

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
      toast.success('Added €6 into total', {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      this.props.substractShipping();
      toast.error('Removed €6 from total', {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  render() {
    return (
      <section className='card-area ptb-60'>
        <ToastContainer transition={Slide} />

        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <form>
                <div className='card-table table-responsive'>
                  <CardProduct />
                </div>

                <div className='card-buttons'>
                  <div className='row align-items-center'>
                    <div className='col-lg-7 col-md-7'>
                      <div className='continue-shopping-box'>
                        <Link href='/'>
                          <a className='btn btn-light'>Continue Shopping</a>
                        </Link>
                      </div>
                    </div>

                    <div className='col-lg-5 col-md-5 text-right'>
                      <label>
                        <input type='checkbox' ref='shipping' onChange={this.handleChecked} />
                        <span>Shipping(+6€)</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className='card-totals'>
                  <h3>Card Totals</h3>

                  <ul>
                    <li>
                      Subtotal <span>€{this.props.total}</span>
                    </li>
                    <li>
                      Shipping <span>€{this.props.shipping}</span>
                    </li>
                    <li>
                      Total{' '}
                      <span>
                        <b>€{this.props.total + this.props.shipping}</b>
                      </span>
                    </li>
                  </ul>

                  <div onClick={this.handleCheckOutClick}>
                    <a className='btn btn-light'>Proceed to Checkout</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.other.total,
    shipping: state.other.shipping,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: 'ADD_SHIPPING' });
    },
    substractShipping: () => {
      dispatch({ type: 'SUB_SHIPPING' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContent);
