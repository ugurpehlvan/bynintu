import React from 'react';

// components
import Navbar from 'components/Layout/Navbar';
import AccountSideBar from 'components/Layout/AccountSidebar';
import Footer from 'components/Layout/Footer';
import Facility from 'components/Common/Facility';

const MyAccountContainer = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='my-account-container'>
        <div className='row my-account-content'>
          <div className={`col-lg-3 col-md-6 account_sidebar_container`}>
            <AccountSideBar />
          </div>
          <div className='col-lg-9 col-md-18 container'>
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
