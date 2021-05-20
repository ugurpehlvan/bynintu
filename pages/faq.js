import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

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

        <Breadcrumb title={translations[language]['g19']} />

        <section className='faq-area ptb-60'>
          <div className='container'>
            <div className='section-title'>
              <h2>
                <span className='dot'></span> {translations[language]['g39']}
              </h2>
            </div>

            <div className='faq-accordion'>
              <ul className='accordion'>
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What Shipping Methods are Available?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What are shipping times and costs?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What payment methods can I use?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your
                          card when the order is shipped.
                        </li>
                        <li>
                          Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't
                          have to re-enter them for future purchases.
                        </li>
                        <li>
                          PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be
                          charged once the order is completed. To register for a PayPal account, visit the website paypal.com.
                        </li>
                        <li>
                          Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your
                          card when the order is shipped.
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What Shipping Methods are Available?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What are shipping times and costs?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What are shipping times and costs?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What payment methods can I use?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your
                          card when the order is shipped.
                        </li>
                        <li>
                          Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't
                          have to re-enter them for future purchases.
                        </li>
                        <li>
                          PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be
                          charged once the order is completed. To register for a PayPal account, visit the website paypal.com.
                        </li>
                        <li>
                          Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your
                          card when the order is shipped.
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </ul>
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
