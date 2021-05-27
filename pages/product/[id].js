import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import RelatedProducts from '../../components/product-details/RelatedProducts';
import Facility from '../../components/shop-style-two/Facility';

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  const response = await axios.get('https://test.bynintu.com/api/v1/product/' + id);

  const product = response.data;

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }) => {
  const products = useSelector((state) => state.other.productsCollectionWomanDress);
  const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare);
  return (
    <>
      <Navbar />
      <Breadcrumb title='Belted chino trousers polo' />

      <section className='products-details-area pt-60'>
        <div className='container'>
          <div className='row'>
            <ProductImage product={product} />

            <ProductContent product={product} />

            <DetailsTab />
          </div>
        </div>

        <RelatedProducts products={products} CompareProducts={addedItemsToCompare} />

        <Facility />
      </section>

      <Footer />
    </>
  );
};

export default Product;
