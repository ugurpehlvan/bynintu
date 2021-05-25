import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';

// components
import Layout from '../components/_App/Layout';

// redux
import { getCustomer } from 'store/auth/actions';
import { getLanguages } from 'store/language/actions';
import { useStore } from '../store/reducers/reducers';

// styles
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import '../public/assets/styles/bootstrap.min.css';
import '../public/assets/styles/fontawesome.min.css';
import '../public/assets/styles/animate.min.css';
import '../public/assets/styles/slick.css';
import '../public/assets/styles/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/assets/styles/style.css';
import '../public/assets/styles/responsive.css';
import '../public/assets/styles/my-account-container.scss';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    store.dispatch(getLanguages());

    if (localStorage.getItem('token')) {
      store.dispatch(getCustomer());
    }
  }, []); //eslint-disable-line

  return (
    <>
      <ToastContainer />
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  );
};

export default MyApp;
