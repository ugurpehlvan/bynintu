import React from 'react';
import Link from 'next/link';
import AddToCard from '../Shared/AddToCard';
import RemoveCompare from '../Shared/RemoveCompare';

const Content = ({ compare_products }) => {
  return (
    <section className='compare-area ptb-60'>
      <div className='container'>
        <div className='section-title'>
          <h2>
            <span className='dot'></span> Compare Products
          </h2>
        </div>

        <div className='products-compare-table'>
          <div className='row'>
            {compare_products.length ? (
              compare_products.map((product, idx) => (
                <div className='col-lg-3 col-md-6 col-sm-6' key={idx}>
                  <RemoveCompare {...product} />

                  <div className='single-product-box'>
                    <div className='product-image'>
                      <Link href='#'>
                        <a>
                          <img src={product.imageUrls[0].url} alt='image' />
                          <img src={product.imageHover} alt='image' />
                        </a>
                      </Link>
                    </div>

                    <div className='product-content'>
                      <h3>
                        <Link href='#'>
                          <a>{product.title}</a>
                        </Link>
                      </h3>

                      <div className='product-price'>
                        <span className='new-price'>€{product.sellPrice}</span>
                      </div>

                      <div className='rating'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='far fa-star'></i>
                      </div>

                      {/* <AddToCard product={product} /> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Empty</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
