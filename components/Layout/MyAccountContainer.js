import React from 'react';
import { connect } from 'react-redux';

// components
import Navbar from 'components/Layout/Navbar';
import AccountSideBar from 'components/Layout/AccountSidebar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';

const MyAccountContainer = ({ children }) => {
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

export default MyAccountContainer;
