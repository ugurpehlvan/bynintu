import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { toast } from 'react-toastify';

class Card extends Component {
  state = {
    display: false,
  };

  closeCard = () => {
    this.props.onClick(this.state.display);
  };

  handleCheckOutClick = (e) => {
    e.preventDefault();

    if (localStorage.getItem('token')) {
      Router.push('/checkout');
    } else {
      toast.error('In order to proceed to the payment step, you must first log in.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      Router.push('/login');
    }
  };

  render() {
    let { items, total } = this.props;
    return (
      <div
        className='modal right fade show shoppingCardModal'
        style={{
          display: 'block',
          paddingRight: '16px',
        }}
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.closeCard}>
              <span aria-hidden='true'>&times;</span>
            </button>

            <div className='modal-body'>
              <h3>My Card ({items.length})</h3>

              <div className='product-card-content'>
                {items.length > 0
                  ? items?.map((item, idx) => (
                      <div className='product-card' key={idx}>
                        <div className='product-image'>
                          <img src={item.imageUrl} alt='image' />
                        </div>

                        <div className='product-content'>
                          <h3>
                            <Link href='#'>
                              <a>{item['tbl_product.title']}</a>
                            </Link>
                          </h3>
                          <span>Blue / XS</span>
                          <div className='product-price'>
                            <span>{item.amount}</span>
                            <span>x</span>
                            <span className='price'>${item['tbl_product.sellPrice']}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  : 'Empty'}
              </div>

              <div className='product-card-subtotal'>
                <span>Subtotal</span>

                <span className='subtotal'>${total}</span>
              </div>

              <div className='product-card-btn'>
                <div onClick={this.handleCheckOutClick}>
                  <a className='btn btn-primary'>Proceed to Checkout</a>
                </div>
                <Link href='/card'>
                  <a className='btn btn-light'>View Shopping Card</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.other.cardList,
    total: state.other.total,
  };
};

export default connect(mapStateToProps)(Card);
