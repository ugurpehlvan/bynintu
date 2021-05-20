import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

// helpers
import { translations } from 'resources';
class Index extends Component {
  render() {
    const { language } = this.props;

    return (
      <>
        <Navbar />

        <Breadcrumb title='Contact Us' />

        <section className='contact-area ptb-60'>
          <div className='container'>
            <div className='section-title'>
              <h2>
                <span className='dot'></span> {translations[language]['g19']}
              </h2>
            </div>

            <div className='row'>
              <div className='col-lg-5 col-md-12'>
                <div className='contact-info'>
                  <h3>{translations[language]['g20']}</h3>
                  <p>{translations[language]['g21']}</p>

                  <ul className='contact-list'>
                    <li>
                      <i className='fas fa-map-marker-alt'></i> {translations[language]['g22']}: 2750 Quadra Street Victoria, Canada
                    </li>
                    <li>
                      <i className='fas fa-phone'></i> {translations[language]['g23']}: <a href='#'>(+123) 456-7898</a>
                    </li>
                    <li>
                      <i className='far fa-envelope'></i> {translations[language]['g24']}: <a href='#'>support@comero.com</a>
                    </li>
                    <li>
                      <i className='fas fa-fax'></i> {translations[language]['g25']}: <a href='#'>+123456</a>
                    </li>
                  </ul>

                  <h3>Opening Hours:</h3>
                  <ul className='opening-hours'>
                    <li>
                      <span>Monday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Tuesday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Wednesday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Thursday - Friday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Sunday:</span> Closed
                    </li>
                  </ul>

                  <h3>{translations[language]['g26']}:</h3>
                  <ul className='social'>
                    <li>
                      <a href='#'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-behance'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-skype'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-pinterest-p'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-7 col-md-12'>
                <div className='contact-form'>
                  <h3>{translations[language]['g27']}</h3>
                  <p>{translations[language]['g28']}</p>

                  <form id='contactForm'>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12'>
                        <div className='form-group'>
                          <label>
                            {translations[language]['g29']} <span>{translations[language]['g30']}*</span>
                          </label>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            className='form-control'
                            required={true}
                            data-error='Please enter your name'
                            placeholder='Enter your name'
                          />
                          <div className='help-block with-errors'></div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='form-group'>
                          <label>
                            {translations[language]['g24']} <span>{translations[language]['g30']}*</span>
                          </label>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            className='form-control'
                            required={true}
                            data-error='Please enter your email'
                            placeholder='Enter your Email Address'
                          />
                          <div className='help-block with-errors'></div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='form-group'>
                          <label>
                            {translations[language]['g31']} <span>{translations[language]['g30']}*</span>
                          </label>
                          <input
                            type='text'
                            name='phone_number'
                            id='phone_number'
                            className='form-control'
                            required={true}
                            data-error='Please enter your phone number'
                            placeholder='Enter your Phone Number'
                          />
                          <div className='help-block with-errors'></div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='form-group'>
                          <label>
                            {translations[language]['g32']} <span>{translations[language]['g30']}*</span>
                          </label>
                          <textarea
                            name='message'
                            id='message'
                            cols='30'
                            rows='8'
                            required={true}
                            data-error='Please enter your message'
                            className='form-control'
                            placeholder='Enter your Message'
                          />
                          <div className='help-block with-errors'></div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <button type='submit' className='btn btn-primary'>
                          {translations[language]['g33']}
                        </button>
                        <div id='msgSubmit' className='h3 text-center hidden'></div>
                        <div className='clearfix'></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

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
