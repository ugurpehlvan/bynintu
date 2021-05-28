import React, { Component } from 'react';
import Slider from 'react-slick';
import { Carousel } from 'react-responsive-carousel';

class ProductImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  // renderSliderMainImages = () => {
  //   return (
  //     this.props.product &&

  //   );
  // };

  renderSliderSubImages = () => {
    return (
      this.props.product &&
      this.props?.product?.imageUrls?.map((data, index) => {
        return (
          <div key={`sub-images-${index}`}>
            <div className='item'>
              <img src={data.url} alt='image' />
            </div>
          </div>
        );
      })
    );
  };

  render() {
    const { product } = this.props;
    return (
      <div className='col-lg-6 col-md-6'>
        <div className='products-page-gallery'>
          <div className='product-page-gallery-main'>
            <div>
              <Carousel showThumbs={true} showArrows={true}>
                {product?.imageUrls?.map((data, index) => {
                  return (
                    <div key={`main-images${index}`}>
                      <img alt='' src={data.url} />
                    </div>
                  );
                })}
              </Carousel>
              <div style={{ height: '90px' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductImage;
