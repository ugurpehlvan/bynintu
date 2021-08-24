import React, { Component } from 'react';
import Link from 'next/link';
import QuickView from '../Modal/QuickView';
import dynamic from 'next/dynamic';
import AddToCard from '../Shared/AddToCard';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

class TrendingProducts extends Component {
  state = {
    modalOpen: false,
    modalData: null,
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

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
      <section className='trending-products-area pb-60'>
        <div className='container'>
          <div className='section-title without-bg'>
            <h2>
              <span className='dot'></span> Trending Products
            </h2>
          </div>

          <div className='row'>
            {this.state.display ? (
              <OwlCarousel className='trending-products-slides owl-carousel owl-theme' {...options}>
                {products?.map((product, idx) => (
                  <div className='col-lg-12 col-md-12' key={idx}>
                    <div className='single-product-box'>
                      <div style={{ height: '452px', display: 'flex', alignItems: 'center' }} className='product-image'>
                        <Link href='/product/[id]' as={`/product/${product.id}`}>
                          <a>
                            <img src={product?.imageUrl} alt='image' />
                            <img style={{ top: '50%', transform: 'translateY(-50%)' }} src={product?.imageUrl} alt='image' />
                          </a>
                        </Link>

                        {/* <ul>
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
                          <li>
                            <Link href='#'>
                              <a data-tip='Add to Compare' data-place='left'>
                                <i className='fas fa-sync'></i>
                              </a>
                            </Link>
                          </li>
                        </ul> */}
                      </div>

                      <div className='product-content'>
                        <h3 style={{ height: '38px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <Link href='/product/[id]' as={`/product/${product.id}`}>
                            <a>{product?.title}</a>
                          </Link>
                        </h3>

                        <div className='product-price'>
                          <span style={{ color: '#8d0000' }} className='new-price'>
                            €{product?.sellPrice}
                          </span>
                          <span style={{ marginLeft: '12px', textDecoration: 'line-through' }} className='new-price'>
                            € {product?.listPrice}
                          </span>
                        </div>

                        <div className='rating'>
                          <i className='fas fa-star'></i>
                          <i className='fas fa-star'></i>
                          <i className='fas fa-star'></i>
                          <i className='fas fa-star'></i>
                          <i className='far fa-star'></i>
                        </div>
                        {/*  <AddToCard product={product} /> */}
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
        {modalOpen ? <QuickView closeModal={this.closeModal} modalData={this.state.modalData} /> : ''}
      </section>
    );
  }
}

export default TrendingProducts;
