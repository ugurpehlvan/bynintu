import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Testimonials from '../components/Common/Testimonials';

// helpers
import { translations } from 'resources';
class Index extends Component {
  render() {
    const { language } = this.props;

    return (
      <>
        <Navbar />

        <Breadcrumb title='About Us' />

        <section className='about-area ptb-60'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-12'>
                <div className='about-content'>
                  <h2>{translations[language]['g15']}</h2>
                  <p>
                    We were established in 2020 to provide our customers and vendors with a flawless e-commerce experience. Today, we are Netherlands's leading e-commerce company and one of the world's leading platforms.
                  </p>

                  <p>
                    By digitizing our tradesmen and SMEs, we reach more customers and grow their businesses. We support women's participation in the digital economy, domestic production and producers. Thus, we make a significant contribution to the growth of the country's economy and increase employment.
                  </p>

                  <div className='signature mb-0'>
                    <img src={require('../images/signature.png')} alt='image' />
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-12'>
                <div className='about-image'>
                  <img src={require('../images/about1.jpg')} className='about-img1' alt='image' />

                  <img src={require('../images/about2.jpg')} className='about-img2' alt='image' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <Facility />

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.appLanguage,
  };
};

export default connect(mapStateToProps)(Index);
