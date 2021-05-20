import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// actions
import { getCustomer } from 'store/actions/actions';

// components
import Navbar from 'components/Layout/Navbar';
import AccountSideBar from 'components/Layout/AccountSidebar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';

const MyAccountContainer = ({ children, getCustomer }) => {
  useEffect(() => {
    if (getCustomer) {
      getCustomer();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0px' }}>
        <div className='row' style={{ maxWidth: '1320px', display: 'flex', flex: '1 1 0px' }}>
          <div className='col-lg-3 col-md-6'>
            <AccountSideBar />
          </div>
          <div className='col-lg-9 col-md-18'>
            <section className='login-area'>
              <div className='container'>{children}</div>
            </section>
          </div>
        </div>
      </div>

      <Facility />

      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomer: () => dispatch(getCustomer()),
  };
};

export default connect(null, mapDispatchToProps)(MyAccountContainer);
