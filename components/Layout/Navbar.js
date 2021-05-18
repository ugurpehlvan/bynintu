import React, { Component } from 'react';
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import MegaMenu from './MegaMenu';

class Navbar extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <TopPanel />

        <TopHeader />

        <MegaMenu user={user} />
      </>
    );
  }
}

export default Navbar;
