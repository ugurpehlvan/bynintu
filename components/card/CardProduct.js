import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { removeItem, updateQuantity } from '../../store/actions/actions';
import { toast } from 'react-toastify';

class CardProduct extends Component {

  handleRemove = (product) => {
    this.props.removeItem(product);

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
  handleAddQuantity = (product) => {
    this.props.updateQuantity({ product, type: 'inc' });
  };
  //to substruct from the quantity
  handleSubtractQuantity = (product) => {
    this.props.updateQuantity({ product, type: 'dec' });
  };

  render() {
    // 1- login olunca card list i db den cek
    // 2- login olunca sepete eklenmis urun varsa sepeti veri tabanina yaz temizle
    // 3- Sign in degilsen urunu local storage kaydet ve local storage daki datayla cardList i guncelle

    let cardList = this.props.cardList.length ? (
      this.props?.cardList?.map((item, idx) => {
        return (
          <tr key={idx}>
            <td className='product-thumbnail'>
              <Link href='#'>
                <a>
                  <img src={item?.imageUrl} alt='item' />
                </a>
              </Link>
            </td>

            <td className='product-name'>
              <Link href='#'>
                <a>{item['tbl_product.title']}</a>
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
              <span className='unit-amount'>€{item['tbl_product.sellPrice']}</span>
            </td>

            <td className='product-quantity'>
              <div className='input-counter'>
                <span
                  className='minus-btn'
                  onClick={() => {
                    this.handleSubtractQuantity(item);
                  }}
                >
                  <i className='fas fa-minus'></i>
                </span>
                <input type='text' value={item.amount} min='1' max={10} readOnly={true} onChange={(e) => e} />
                <span
                  className='plus-btn'
                  onClick={() => {
                    this.handleAddQuantity(item);
                  }}
                >
                  <i className='fas fa-plus'></i>
                </span>
              </div>
            </td>

            <td className='product-subtotal'>
              <span className='subtotal-amount'>€{item['tbl_product.sellPrice'] * item.amount}</span>

              <Link href='#'>
                <a
                  className='remove'
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleRemove(item);
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
          <tbody>{cardList}</tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.other.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) => {
      dispatch(removeItem(product));
    },
    updateQuantity: (product) => {
      dispatch(updateQuantity(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
