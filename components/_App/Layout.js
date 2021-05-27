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
          content='Bynintu is a clean and modern purse React Next JS eCommerce template. This is built on React.js, Next.js, React-Redux, ES6+, Sass and Bootstrap 4.'
        />
        <meta name='og:title' property='og:title' content='Bynintu - React Next eCommerce Templates'></meta>
        <meta name='twitter:card' content='Bynintu - React Next eCommerce Templates'></meta>
      </Head>

      {children}

      <ToastContainer transition={Slide} />

      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </>
  );
};
export default Layout;
