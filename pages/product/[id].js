import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import RelatedProducts from '../../components/product-details/RelatedProducts';
import Facility from '../../components/shop-style-two/Facility';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = useSelector((state) => {
    const {
      productsCollectionShoes,
      productsCollectionPillows,
      productsCollectionWomanDress,
      productsCollectionLinens,
      productsCollectionBathrobe,
      productsCollectionTen,
      productsCollectionEleven,
      productsCovid19,
      productsGrocery,
      productsElectronics,
      productsFurniture,
    } = state.other;

    const allProducts = [
      ...productsCollectionShoes,
      ...productsCollectionPillows,
      ...productsCollectionWomanDress,
      ...productsCollectionLinens,
      ...productsCollectionBathrobe,
      ...productsCollectionTen,
      ...productsCollectionEleven,
      ...productsCovid19,
      ...productsGrocery,
      ...productsElectronics,
      ...productsFurniture,
    ];

    return allProducts.find((item) => item.id === parseInt(id));
  });

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
