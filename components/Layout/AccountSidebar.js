import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

// helpers
import { translations } from 'resources';

const AccountSidebar = ({ language }) => {
  const router = useRouter();

  const listIteStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    borderBottom: '1px solid #e6e6e6',
  };

  const active = {
    color: '#8d0000',
    padding: '10px 0px',
    fontSize: '13px',
  };

  const unActive = {
    padding: '10px 0px',
    color: '#262626',
    fontSize: '13px',
  };

  return (
    <div>
      <h2 style={{ margin: '10px 0 15px', fontSize: '24px', color: '#000', fontWeight: '400' }}>{translations[language]['g2']}</h2>
      <ul style={{ listStyle: 'none', padding: '0px' }}>
        <li style={listIteStyle}>
          <Link href='/my-account/my-orders'>
            <a style={router.pathname === '/my-account/my-orders' ? active : unActive}>{translations[language]['g3']}</a>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/my-account/user-info'>
            <a style={router.pathname === '/my-account/user-info' ? active : unActive}>{translations[language]['g4']}</a>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/my-account/address'>
            <a style={router.pathname === '/my-account/address' ? active : unActive}>{translations[language]['g5']}</a>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/my-account/help'>
            <a style={router.pathname === '/my-account/help' ? active : unActive}>{translations[language]['g6']}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.appLanguage,
  };
};

export default connect(mapStateToProps)(AccountSidebar);
