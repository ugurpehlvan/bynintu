import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { addToCard, addCardToDatabase } from '../../store/actions/actions';
import SizeGuide from './SizeGuide';
import Shipping from './Shipping';

class ProductContent extends Component {
  state = {
    qty: 1,
    max: 10,
    min: 1,
    sizeGuide: false,
    shipModal: false,
    selectedWarehouse: null,
  };

  handleAddToCardFromView = () => {
    if (!this.state.selectedWarehouse) {
      alert('Please select a warehouse');
      return;
    }

    if (!this.state.qty) {
      alert('Please select at least one quantity');
      return;
    }
    this.props.addToCard(this.props.product, this.state.qty, this.state.selectedWarehouse.warehouseId);

    // if (!localStorage.getItem('token')) {
    //   localStorage.setItem('cardWithoutLogin', 'cardWithoutLogin');
    // } else {
    //   this.props.addCardToDatabase({
    //     productId: this.props.product.id,
    //     amount: this.state.qty,
    //     warehouseId: this.state.selectedWarehouse.warehouseId,
    //   });
    // }

    toast.success('Added to the card', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.qty < 10) {
        return {
          qty: prevState.qty + 1,
        };
      } else {
        return null;
      }
    });
  };

  handleWarehouseClick = (warehouse) => {
    this.setState({ selectedWarehouse: warehouse });
  };

  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.qty > 1) {
        return {
          qty: prevState.qty - 1,
        };
      } else {
        return null;
      }
    });
  };

  openSizeGuide = () => {
    this.setState({ sizeGuide: true });
  };

  closeSizeGuide = () => {
    this.setState({ sizeGuide: false });
  };

  openShipModal = () => {
    this.setState({ shipModal: true });
  };

  closeShipModal = () => {
    this.setState({ shipModal: false });
  };

  render() {
    const { sizeGuide, shipModal, selectedWarehouse } = this.state;
    const { product } = this.props;

    const availableWareHouses = product?.warehouses?.filter?.((el) => el.quantity > 0);

    if (availableWareHouses?.length === 1 && !selectedWarehouse) {
      this.setState({ selectedWarehouse: availableWareHouses[0] });
    }

    return (
      <>
        <div className='col-lg-6 col-md-6'>
          <div className='product-details-content'>
            <h3>{product?.title}</h3>
            <h5>{product?.subTitle}</h5>

            <div className='product-review'>
              <div className='rating'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star-half-alt'></i>
              </div>
              <Link href='#'>
                <a className='rating-count'>3 reviews</a>
              </Link>
            </div>

            <div className='price'>
              <span style={{ color: '#8d0000' }} className='new-price'>
                € {product?.sellPrice}
              </span>
              <span style={{ marginLeft: '12px', textDecoration: 'line-through' }} className='new-price'>
                € {product?.listPrice}
              </span>
            </div>

            <div className='ship-price'>
              <span className='title'>Ship-price:</span> <span className='price'>€ 20</span>
            </div>

            <ul className='product-info'>
              {/* <li>
                <span>Vendor:</span>{' '}
                <Link href='#'>
                  <a>Lereve</a>
                </Link>
              </li> */}
              <li>
                <span>Availability:</span>{' '}
                <Link href='#'>
                  <a>
                    {product?.quantity ? 'In stock' : 'Out of stock'} {selectedWarehouse?.quantity ? (`${selectedWarehouse?.quantity} items`) : ''}
                  </a>
                </Link>
              </li>
            </ul>

            {/* <div className='product-color-switch'>
              <h4>Color:</h4>

              <ul>
                <li>
                  <Link href='#'>
                    <a title='Black' className='color-black'></a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a title='White' className='color-white'></a>
                  </Link>
                </li>
                <li className='active'>
                  <Link href='#'>
                    <a title='Green' className='color-green'></a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a title='Yellow Green' className='color-yellowgreen'></a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a title='Teal' className='color-teal'></a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='product-size-wrapper'>
              <h4>Size:</h4>

              <ul>
                <li>
                  <Link href='#'>
                    <a>XS</a>
                  </Link>
                </li>
                <li className='active'>
                  <Link href='#'>
                    <a>S</a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a>M</a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a>XL</a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a>XXL</a>
                  </Link>
                </li>
              </ul>
            </div> */}

            <div className='warehouse-info-wrapper'>
              <h4>Shipped from:</h4>
              <ul>
                {availableWareHouses?.map((warehouse) => {
                  return (
                    <li
                      key={warehouse.warehouseId}
                      className={selectedWarehouse?.warehouseId === warehouse.warehouseId ? 'active' : ''}
                      onClick={() => this.handleWarehouseClick(warehouse)}
                    >
                      {warehouse['tbl_warehouse.name']}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='product-info-btn'>
              <Link href='#'>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    this.openSizeGuide();
                  }}
                >
                  <i className='fas fa-crop'></i> Size guide
                </a>
              </Link>
              <Link href='#'>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    this.openShipModal();
                  }}
                >
                  <i className='fas fa-truck'></i> Shipping
                </a>
              </Link>

              <Link href='#'>
                <a>
                  <i className='far fa-envelope'></i> Ask about this product
                </a>
              </Link>
            </div>

            <div style={{ display: 'flex' }} className='product-add-to-card'>
              <div className='input-counter'>
                <span className='minus-btn' onClick={this.DecreaseItem}>
                  <i className='fas fa-minus'></i>
                </span>
                <input
                  type='text'
                  value={this.state.qty}
                  min={this.state.min}
                  max={this.state.max}
                  onChange={(e) => this.setState({ qty: e.target.value })}
                />
                <span className='plus-btn' onClick={this.IncrementItem}>
                  <i className='fas fa-plus'></i>
                </span>
              </div>

              <button type='submit' className='btn btn-primary' onClick={this.handleAddToCardFromView}>
                <i className='fas fa-card-plus'></i> Add to Card
              </button>

              <div style={{ marginLeft: '10px' }}>
                <Link href='#'>
                  <a className='btn btn-light'>
                    <i className='far fa-heart'></i> Add to Wishlist
                  </a>
                </Link>
              </div>
            </div>

            {/* <div className='buy-checkbox-btn'>
              <div className='item'>
                <Link href='#'>
                  <a className='btn btn-primary'>Buy it now!</a>
                </Link>
              </div>
            </div> */}

            <div className='custom-payment-options'>
              <span>Guaranteed safe checkout:</span>

              <div className='payment-methods'>
                <Link href='#'>
                  <a>
                    <img src={require('../../images/payment-image/1.svg')} alt='image' />
                  </a>
                </Link>

                <Link href='#'>
                  <a>
                    <img src={require('../../images/payment-image/2.svg')} alt='image' />
                  </a>
                </Link>

                <Link href='#'>
                  <a>
                    <img src={require('../../images/payment-image/3.svg')} alt='image' />
                  </a>
                </Link>

                <Link href='#'>
                  <a>
                    <img src={require('../../images/payment-image/4.svg')} alt='image' />
                  </a>
                </Link>

                <Link href='#'>
                  <a>
                    <img src={require('../../images/payment-image/5.svg')} alt='image' />
                  </a>
                </Link>

                <Link href='#'>
                  <a>
                    <img src={require('../../images/payment-image/6.svg')} alt='image' />
                  </a>
                </Link>

                <Link href='#'>
                  <a>
                    <img src={require('../../images/payment-image/7.svg')} alt='image' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {sizeGuide ? <SizeGuide closeSizeGuide={this.closeSizeGuide} /> : ''}
        {shipModal ? <Shipping closeShipModal={this.closeShipModal} /> : ''}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCard: (product, qty, warehouseId) => {
      dispatch(addToCard(product, qty, warehouseId));
    },
    addCardToDatabase: (product, qty, warehouseId) => {
      dispatch(addCardToDatabase(product, qty, warehouseId));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductContent);
