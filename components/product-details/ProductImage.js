import React, { Component } from 'react';
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

  render() {
    const { product } = this.props;
    return (
      <div className='col-lg-6 col-md-6'>
        <div className='products-page-gallery'>
          <div className='product-page-gallery-main'>
            <Carousel swipeable={true} thumbWidth={110} showArrows={true} showIndicators={false}>
              {product?.imageUrls?.map((data, index) => {
                return (
                  <div
                    style={{
                      height: '600px',
                      width: '396px',
                      margin: 'auto',
                      justifyContent: 'center',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    key={`main-images${index}`}
                  >
                    <img alt='' src={data.url} />
                  </div>
                );
              })}
            </Carousel>
            <div style={{ height: '90px' }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductImage;
