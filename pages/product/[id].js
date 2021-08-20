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
import { apiURL, axiosClient } from '../../service';

// export const getServerSideProps = async (context) => {
//   const id = context.params.id;

//   const response = await axios.get('https://test.bynintu.com/api/v1/product/' + id);

//   const product = response.data;

//   if (!product) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       product,
//     },
//   };
// };

export async function getStaticPaths() {
  const products = await axios.post('https://test.bynintu.com/api/v1/product/listSearch', {});

  const paths = products?.data?.map((product) => ({
    params: { id: product?.id?.toString() },
  }));

  return { paths, fallback: true };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  return {
    props: {
      product: (await axios.get('https://test.bynintu.com/api/v1/product/' + params.id)).data,
      relatedProducts: (
        await axios.post('https://test.bynintu.com/api/v1/product/listSearch', {
          filter: {
            page: {
              size: 10,
              number: 2,
            },
          },
        })
      ).data,
    },
    revalidate: 10,
  };
}

const Product = ({ product = {}, relatedProducts = [] }) => {
  const products = useSelector((state) => state.other.productsCollectionWomanDress);
  const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare);

  return (
    <>
      <Navbar />
      <Breadcrumb title={product?.title} />

      <section className='products-details-area pt-60'>
        <div className='container'>
          <div className='row'>
            <ProductImage product={product} />

            <ProductContent product={product} />

            <DetailsTab product={product} />
          </div>
        </div>

        <RelatedProducts products={relatedProducts} CompareProducts={addedItemsToCompare} />

        <Facility />
      </section>

      <Footer />
    </>
  );
};

export default Product;
