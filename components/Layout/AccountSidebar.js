import React from 'react';

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
          <a style={{ padding: '10px 0px', color: '#262626', fontSize: '13px' }} href='/'>
            My Orders
          </a>
        </li>
        <li style={listIteStyle}>
          <a style={{ padding: '10px 0px', color: '#262626', fontSize: '13px' }} href='/'>
            Account Infos
          </a>
        </li>
        <li style={listIteStyle}>
          <a style={{ padding: '10px 0px', color: '#262626', fontSize: '13px' }} href='/'>
            Address
          </a>
        </li>
        <li style={listIteStyle}>
          <a style={{ padding: '10px 0px', color: '#262626', fontSize: '13px' }} href='/'>
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
