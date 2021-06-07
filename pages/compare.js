import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Content from '../components/compare/Content';

// helpers
import { translations } from 'resources';

const Compare = () => {
  const products = useSelector((state) => state.other.addedItemsToCompare);
  const language = useSelector((state) => state.language.appLanguage);

  return (
    <>
      <Navbar />

      <Breadcrumb title={translations[language]['g18']} />

      <Content compare_products={products} />

      <Facility />

      <Footer />
    </>
  );
};

export default Compare;
