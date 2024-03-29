import React, { Component } from 'react';
import Link from 'next/link';
import QuickView from '../Modal/QuickView';
import AddToCompare from '../Shared/AddToCompare';
import AddToCard from '../Shared/AddToCard';

class BestSeller extends Component {
  state = {
    modalOpen: false,
    modalData: null,
  };

  compareButton = (id) => {
    let compare_exist = this.props.CompareProducts.filter((item) => item.id === id);
    if (compare_exist.length > 0) {
      return (
        <Link href='#'>
          <a
            data-tip='Already Added'
            data-place='left'
            onClick={(e) => {
              e.preventDefault();
            }}
            disabled={true}
            className='disabled'
          >
            <i className='fas fa-sync'></i>
          </a>
        </Link>
      );
    } else {
      return <AddToCompare id={id} />;
    }
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  handleModalData = (data) => {
    this.setState({
      modalData: data,
    });
  };
  render() {
    let { products } = this.props;
    const { modalOpen } = this.state;
    return (
      <section className='best-sellers-area pt-60'>
        <div className='container'>
          <div className='section-title'>
            <h2>
              <span className='dot'></span> Best Sellers
            </h2>
          </div>

          <div className='row'>
            {products?.map((product, idx) => (
              <div className='col-lg-4 col-sm-6' key={idx}>
                <div className='single-product-box single-product-two'>
                  <div className='product-image'>
                    <Link href='/product/[id]' as={`/product/${product.id}`}>
                      <a>
                        <img src={product.image} alt='image' />
                        <img src={product.imageHover} alt='image' />
                      </a>
                    </Link>

                    <ul>
                      <li>
                        <Link href='#'>
                          <a
                            data-tip='Quick View'
                            data-place='left'
                            onClick={(e) => {
                              e.preventDefault();
                              this.openModal();
                              this.handleModalData(product);
                            }}
                          >
                            <i className='far fa-eye'></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                          <a data-tip='Add to Wishlist' data-place='left'>
                            <i className='far fa-heart'></i>
                          </a>
                        </Link>
                      </li>
                      <li>{this.compareButton(product.id)}</li>
                    </ul>
                  </div>

                  <div className='product-content'>
                    <h3>
                      <Link href='/product/[id]' as={`/product/${product.id}`}>
                        <a>{product.title}</a>
                      </Link>
                    </h3>

                    <div className='product-price'>
                      <span className='new-price'>€{product.sellPrice}</span>
                    </div>

                    <div className='rating'>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='far fa-star'></i>
                    </div>

                    {/* <AddToCard product={product} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {modalOpen ? <QuickView closeModal={this.closeModal} modalData={this.state.modalData} /> : ''}
      </section>
    );
  }
}

export default BestSeller;
