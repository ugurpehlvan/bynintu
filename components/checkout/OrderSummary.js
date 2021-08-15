import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

class OrderSummary extends Component {
  render() {
    return (
      <div className='order-table table-responsive'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Product Name</th>
              <th scope='col'>Total</th>
            </tr>
          </thead>

          <tbody>
            {this.props.items.map((item, idx) => (
              <tr key={idx}>
                <td className='product-name'>
                  <Link href='#'>
                    <a>{item["tbl_product.title"]}</a>
                  </Link>
                </td>

                <td className='product-total'>
                  <span className='subtotal-amount'>€{item['tbl_product.sellPrice'] * item.amount}</span>
                </td>
              </tr>
            ))}

            <tr>
              <td className='order-subtotal'>
                <span>Card Subtotal</span>
              </td>

              <td className='order-subtotal-price'>
                <span className='order-subtotal-amount'>€{this.props.total}</span>
              </td>
            </tr>

            <tr>
              <td className='order-shipping'>
                <span>Shipping</span>
              </td>

              <td className='shipping-price'>
                <span>€{this.props.shipping}</span>
              </td>
            </tr>

            <tr>
              <td className='total-price'>
                <span>Order Total</span>
              </td>

              <td className='product-subtotal'>
                <span className='subtotal-amount'>€{this.props.total + this.props.shipping}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.other.cardList,
    total: state.other.total,
    shipping: state.other.shipping,
  };
};

export default connect(mapStateToProps)(OrderSummary);
