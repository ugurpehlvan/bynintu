import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import QuickView from '../Modal/QuickView';
import AddToCard from '../Shared/AddToCard';

const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
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
      items: 6,
    },
  },
};

class RelatedProducts extends Component {
  state = {
    display: false,
    modalOpen: false,
    modalData: null,
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
      <>
        <div className='related-products-area'>
          <div className='container'>
            <div className='section-title'>
              <h2>
                <span className='dot'></span> Related Products
              </h2>
            </div>

            <div className='row'>
              {this.state.display ? (
                <OwlCarousel className='offer-slides owl-carousel owl-theme' {...options}>
                  {products.map((product, idx) => (
                    <div className='col-lg-12 col-md-12' key={idx}>
                      <div style={{ width: '198px' }} className='single-product-box'>
                        <div style={{ height: '300px', width: '198px', margin: 'auto' }} className='product-image'>
                          <Link href='/product/[id]' as={`/product/${product.id}`}>
                            <a>
                              <img src={product.imageUrls[0].url} alt='image' />
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
                            <li>
                              <Link href='#'>
                                <a data-tip='Add to Compare' data-place='left'>
                                  <i className='fas fa-sync'></i>
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className='product-content'>
                          <h3 style={{ height: '38px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
                          <AddToCard product={product} />
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
        </div>

        {modalOpen ? <QuickView closeModal={this.closeModal} modalData={this.state.modalData} /> : ''}
      </>
    );
  }
}

export default RelatedProducts;
