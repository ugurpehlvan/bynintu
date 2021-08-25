import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';

// import withRedux from 'next-redux-wrapper';

// components
import Layout from '../components/_App/Layout';

// redux
import { getIP } from 'store/account/actions';
import { getCustomer } from 'store/auth/actions';
import { getLanguages } from 'store/language/actions';
import { createDefaultCard, viewCardPage } from 'store/actions/actions';
import { useStore } from '../store/reducers/reducers';

// styles
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/assets/styles/bootstrap.min.css';
import '../public/assets/styles/fontawesome.min.css';
import '../public/assets/styles/animate.min.css';
import '../public/assets/styles/slick.css';
import '../public/assets/styles/slick-theme.css';
import '../public/assets/styles/style.css';
import '../public/assets/styles/responsive.css';
import '../public/assets/styles/my-account-container.scss';
import '../public/assets/styles/mega-menu.scss';
import '../public/assets/styles/product-content.scss';
import '../public/assets/styles/stripe.css';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();

  useEffect(() => {
    store.dispatch(getLanguages());
    if (localStorage.getItem('localCard')) {
      const card = JSON.parse(localStorage.getItem('localCard'));
      store.dispatch(createDefaultCard(card));
    }

    if (localStorage.getItem('token')) {
      store.dispatch(getCustomer());
      store.dispatch(viewCardPage());
    } else if (location.pathname.startsWith('/account')) {
      router.push('/');
    }
  }); //eslint-disable-line

  useEffect(() => {
    axios.post('https://test.bynintu.com/api/v1/country/ipToCountry').then((res) => {
      console.log({ res });
    }).catch(err => {
      console.log({ err });
    })
  }, []);

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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchAddress: () => dispatch(searchAddress()),
//     deleteAddress: (id, callback) => dispatch(deleteAddress(id, callback)),
//     getAddress: (id) => dispatch(getAddress(id)),
//   };
// };

// export default connect({}, mapDispatchToProps)(MyApp);