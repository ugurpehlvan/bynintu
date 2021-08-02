import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from '../../store/actions/actions';
import { toast } from 'react-toastify';

class CardProduct extends Component {
  handleRemove = (id) => {
    this.props.removeItem(id);

    toast.error('Removed from card', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let cardItems = this.props.items.length ? (
      this.props.items.map((item, idx) => {
        return (
          <tr key={idx}>
            <td className='product-thumbnail'>
              <Link href='#'>
                <a>
                  <img src={item.product.imageUrls[0].url} alt='item' />
                </a>
              </Link>
            </td>

            <td className='product-name'>
              <Link href='#'>
                <a>{item.product.title}</a>
              </Link>
              <ul>
                <li>
                  Color: <strong>Light Blue</strong>
                </li>
                <li>
                  Size: <strong>XL</strong>
                </li>
                <li>
                  Material: <strong>Cotton</strong>
                </li>
              </ul>
            </td>

            <td className='product-price'>
              <span className='unit-amount'>€{item.product.sellPrice}</span>
            </td>

            <td className='product-quantity'>
              <div className='input-counter'>
                <span
                  className='minus-btn'
                  onClick={() => {
                    this.handleSubtractQuantity(item.product);
                  }}
                >
                  <i className='fas fa-minus'></i>
                </span>
                <input type='text' value={item.qty} min='1' max={10} readOnly={true} onChange={(e) => e} />
                <span
                  className='plus-btn'
                  onClick={() => {
                    this.handleAddQuantity(item.product);
                  }}
                >
                  <i className='fas fa-plus'></i>
                </span>
              </div>
            </td>

            <td className='product-subtotal'>
              <span className='subtotal-amount'>€{item.product.sellPrice * item.qty}</span>

              <Link href='#'>
                <a
                  className='remove'
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleRemove(item.product);
                  }}
                >
                  <i className='far fa-trash-alt'></i>
                </a>
              </Link>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td className='product-thumbnail' colSpan='5'>
          <p>Empty.</p>
        </td>
      </tr>
    );

    return (
      <>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Product</th>
              <th scope='col'>Name</th>
              <th scope='col'>Unit Price</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Total</th>
            </tr>
          </thead>
          <tbody>{cardItems}</tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.other.cardItems,
    total: state.other.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) => {
      dispatch(removeItem(product));
    },
    addQuantity: (product) => {
      dispatch(addQuantity(product));
    },
    subtractQuantity: (product) => {
      dispatch(subtractQuantity(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
