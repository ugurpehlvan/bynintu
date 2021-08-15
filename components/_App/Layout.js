import React from 'react';
import Head from 'next/head';
import GoTop from '../Shared/GoTop';
import { ToastContainer, Slide } from 'react-toastify';
import ReactTooltip from 'react-tooltip';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <ReactTooltip />

      <Head>
        <title>Bynintu</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta
          name='description'
          content="The Most Famous Brands, Sign Up with Big Discounts. Experience the Special Shopping Difference. Hurry, Don't Miss Opportunities. New season. Up to 80% Discounts. Free Shipping Deal. Secure shopping. Famous Fashion Brands. Big Discounts."
        />
        <meta name='og:title' property='og:title' content='Bynintu'></meta>
        <meta name='twitter:card' content='Bynintu'></meta>
      </Head>

      {children}

      <ToastContainer transition={Slide} />

      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </>
  );
};
export default Layout;
