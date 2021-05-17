import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';

class Index extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Breadcrumb title='Checkout' />

        <CheckoutForm />

        <Facility />

        <Footer />
      </>
    );
  }
}

export default Index;
