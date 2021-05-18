import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { useRouter } from 'next/router';

// actions
import { validateAccount } from 'store/actions/actions';
import { getCustomer } from 'store/actions/actions';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Banner from '../components/shop-style-two/Banner';
import OfferArea from '../components/shop-style-two/OfferArea';
import Products from '../components/shop-style-two/Products';
import CategoryProducts from '../components/shop-style-two/CategoryProducts';
import TrendingProducts from '../components/shop-style-two/TrendingProducts';
import BestSeller from '../components/shop-style-two/BestSellers';
import Facility from '../components/shop-style-two/Facility';
import Testimonials from '../components/Common/Testimonials';
import News from '../components/Common/News';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';

const Index = ({ validateAccount, getCustomer, isSignedIn, user }) => {
  const router = useRouter();

  const productsCollectionShoes = useSelector((state) => state.other.productsCollectionShoes);
  const productsCollectionPillows = useSelector((state) => state.other.productsCollectionPillows);
  const productsCollectionWomanDress = useSelector((state) => state.other.productsCollectionWomanDress);
  const productsCollectionLinens = useSelector((state) => state.other.productsCollectionLinens);
  const productsCollectionBathrobe = useSelector((state) => state.other.productsCollectionBathrobe);
  const addedItemsToCompare = useSelector((state) => state.other.addedItemsToCompare);

  const { token } = router.query;

  useEffect(() => {
    console.log('///////// token //////////', token);
    console.log('///////// isSignedIn //////////', isSignedIn);
    token && validateAccount({ token }, (route) => router.push(route));
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getCustomer();
    }
  }, []); //eslint-disable-line

  return (
    <>
      <Navbar user={user} />

      <Banner />

      <OfferArea />

      <Products
        productsCollectionWomanDress={productsCollectionWomanDress}
        productsCollectionBathrobe={productsCollectionBathrobe}
        productsCollectionLinens={productsCollectionLinens}
        CompareProducts={addedItemsToCompare}
      />

      <CategoryProducts />

      <TrendingProducts products={productsCollectionPillows} CompareProducts={addedItemsToCompare} />

      <BestSeller products={productsCollectionShoes} CompareProducts={addedItemsToCompare} />

      <Facility />

      <Testimonials />

      <News />

      <Subscribe />

      <Partner />

      <InstagramPhoto />

      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    isSignedIn: auth.isSignedIn,
    user: auth.user,
  };
};

export default connect(mapStateToProps, { validateAccount, getCustomer })(Index);
