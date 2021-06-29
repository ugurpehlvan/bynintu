import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

// actions
import { addLocalCartToDataBase } from 'store/actions/actions';

// components
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';
import Breadcrumb from 'components/Common/Breadcrumb';
import CheckoutForm from 'components/checkout/CheckoutForm';

// helpers
import { translations } from 'resources';

const Index = ({ language, addLocalCartToDataBase }) => {
  const router = useRouter();

  const createCartItems = () => {
    const cart = JSON.parse(localStorage.getItem('localCart'));

    let data = [];
    cart?.addedItems?.forEach((product) => {
      console.log('cart2', cart);
      data.push({
        productId: product.id,
        amount: 1,
      });
    });

    addLocalCartToDataBase({
      products: cart.addedItems,
    });
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    } else if (localStorage.getItem('cartWithoutLogin')) {
      createCartItems();
    }
  }, []);

  return (
    <>
      <Navbar />

      <Breadcrumb title={translations[language]['g17']} />

      <CheckoutForm />

      <Facility />

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.appLanguage,
  };
};

export default connect(mapStateToProps, { addLocalCartToDataBase })(Index);
