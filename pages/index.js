import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { useRouter } from 'next/router';

// actions
import { validateAccount } from 'store/auth/actions';

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
// import News from '../components/Common/News';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import { axiosClient } from 'service';
import apiUrl from 'service/apiURL';
import authHeader from 'utils/authHeader';

const Index = ({ validateAccount }) => {
  const router = useRouter();
  const [homePageData, setHomePageData] = useState({
    bestSellers: [],
    trends: [],
    last: [],
    special: [],
    featured: [],
  });

  const productsCollectionShoes = useSelector((state) => state.other.productsCollectionShoes);
  const productsCollectionPillows = useSelector((state) => state.other.productsCollectionPillows);
  const productsCollectionWomanDress = useSelector((state) => state.other.productsCollectionWomanDress);
  const productsCollectionLinens = useSelector((state) => state.other.productsCollectionLinens);
  const productsCollectionBathrobe = useSelector((state) => state.other.productsCollectionBathrobe);
  const addedItemsToCompare = useSelector((state) => state.other.addedItemsToCompare);

  const { token } = router.query;

  const getPageData = async () => {
    const response = await axiosClient.get(apiUrl.homePageData, authHeader());
    if (response.data) setHomePageData(response.data);
  };

  useEffect(() => {
    getPageData();
    token && validateAccount({ token }, (route) => router.push(route));
  }, [token]);

  return (
    <>
      <Navbar />

      <Banner />

      <OfferArea />

      <Products
        latest={homePageData.last}
        special={homePageData.special}
        featured={homePageData.featured}
        // CompareProducts={addedItemsToCompare}
      />

      <CategoryProducts />

      <TrendingProducts products={homePageData.trends} CompareProducts={addedItemsToCompare} />

      <BestSeller products={homePageData.bestSellers} CompareProducts={addedItemsToCompare} />

      <Facility />

      <Testimonials />

      {/* <News /> */}

      <Subscribe />

      <Partner />

      <InstagramPhoto />

      <Footer />
    </>
  );
};

export default connect(null, { validateAccount })(Index);
