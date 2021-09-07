import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

// actions
import { addLocalCardToDataBase } from 'store/actions/actions';

// components
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';
import Breadcrumb from 'components/Common/Breadcrumb';
import CheckoutForm from 'components/checkout/CheckoutForm';

// helpers
import { translations } from 'resources';

const Index = ({ language, addLocalCardToDataBase }) => {
  const router = useRouter();

  // const createCardItems = () => {
  //   let card;
  //   if (localStorage.getItem('localCard')) card = JSON.parse(localStorage.getItem('localCard'));

  //   let data = [];
  //   card?.cardList?.forEach((product) => {
  //     data.push({
  //       productId: product.productId,
  //       amount: 1,
  //     });
  //   });

  //   addLocalCardToDataBase({
  //     products: card.addedItems,
  //   });
  // };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
    // else if (localStorage.getItem('cardWithoutLogin')) {
    //   createCardItems();
    // }
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

export default connect(mapStateToProps, { addLocalCardToDataBase })(Index);
