import React from 'react';
import Link from 'next/link';

const AccountSidebar = () => {
  const listIteStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    borderBottom: '1px solid #e6e6e6',
  };

  return (
    <div>
      <h2 style={{ margin: '10px 0 15px', fontSize: '24px', color: '#000', fontWeight: '400' }}>My Account</h2>
      <ul style={{ listStyle: 'none', padding: '0px' }}>
        <li style={listIteStyle}>
          <Link href='/my-account/my-orders'>
            <a style={{ padding: '10px 0px', color: '#262626', fontSize: '13px' }}>My Orders</a>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/my-account/user-info'>
            <a style={{ padding: '10px 0px', color: '#262626', fontSize: '13px' }}>Account Infos</a>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/my-account/address'>
            <a style={{ padding: '10px 0px', color: '#262626', fontSize: '13px' }}>Address</a>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/my-account/address'>
            <a style={{ padding: '10px 0px', color: '#262626', fontSize: '13px' }}>Help</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
