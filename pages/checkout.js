import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';

// helpers
import { translations } from 'resources';
class Index extends Component {
  render() {
    const { language } = this.props;

    return (
      <>
        <Navbar />

        <Breadcrumb title={translations[language]['g17']} />

        <CheckoutForm />

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
