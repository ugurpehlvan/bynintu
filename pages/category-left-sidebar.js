import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// actions
import { getProducts } from 'store/product/actions';

// components
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import Breadcrumb from 'components/Common/Breadcrumb';
import Facility from 'components/Common/Facility';
import LeftSidebar from 'components/Sidebar/LeftSidebar';
import ProductsFilterOptions from 'components/Common/ProductsFilterOptions';
import ProductsCard from 'components/products/ProductsCard';

// export const getServerSideProps = async () => {
//   const response = await axios.post('https://test.bynintu.com/api/v1/product/listSearch', {});

//   const products = response.data;

//   if (!products.length) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       products,
//     },
//   };
// };

const hookClass = ({ searchedProducts, CompareProducts, searchedProductsTotalCount }) => {
  const [gridClass, setGridClass] = useState('');

  const handleGrid = (e) => {
    setGridClass(e);
  };

  console.log('products', searchedProducts);
  return (
    <>
      <Navbar />

      <Breadcrumb title="Women's" />

      <section className='products-collections-area ptb-60'>
        <div className='container'>
          <div className='section-title'>
            <h2>
              <span className='dot'></span> Women's
            </h2>
          </div>

          <div className='row'>
            <LeftSidebar />

            <div className='col-lg-8 col-md-12'>
              <ProductsFilterOptions products={searchedProducts} searchedProductsTotalCount={searchedProductsTotalCount} onClick={handleGrid} />

              <div id='products-filter' className={`products-collections-listing row ${gridClass}`}>
                <ProductsCard products={searchedProducts} CompareProducts={CompareProducts} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facility />

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    //products: state.searchedProducts.searchedProducts,
    CompareProducts: state.addedItemsToCompare,
    searchedProducts: state.product.searchedProducts,
    searchedProductsTotalCount: state.product.searchedProductsTotalCount,
  };
};

export default connect(mapStateToProps, { getProducts })(hookClass);
