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
    display: 'flex',
    alignItems: 'center',
  };

  const unActive = {
    padding: '10px 0px',
    color: '#262626',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
  };

  const activeIcon = {
    color: '#8d0000',
    marginRight: '6px',
  };

  const unActiveIcon = {
    color: '#999',
    marginRight: '6px',
  };

  return (
    <div>
      <h2 style={{ margin: '10px 0 15px', fontSize: '24px', color: '#000', fontWeight: '400' }}>{translations[language]['g2']}</h2>
      <ul style={{ listStyle: 'none', padding: '0px' }}>
        <li style={listIteStyle}>
          <Link href='/account/orders'>
            <div style={router.pathname === '/account/orders' ? active : unActive}>
              <i style={router.pathname === '/account/orders' ? activeIcon : unActiveIcon} className='fas fa-box-open'></i>
              <a>{translations[language]['g3']}</a>
            </div>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/account/user-info'>
            <div style={router.pathname === '/account/user-info' ? active : unActive}>
              <i style={router.pathname === '/account/user-info' ? activeIcon : unActiveIcon} className='fas fa-user'></i>
              <a>{translations[language]['g4']}</a>
            </div>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/account/address'>
            <div style={router.pathname === '/account/address' ? active : unActive}>
              <i style={router.pathname === '/account/address' ? activeIcon : unActiveIcon} className='fas fa-map-marker-alt'></i>
              <a>{translations[language]['g5']}</a>
            </div>
          </Link>
        </li>
        <li style={listIteStyle}>
          <Link href='/account/help'>
            <div style={router.pathname === '/account/help' ? active : unActive}>
              <i style={router.pathname === '/account/help' ? activeIcon : unActiveIcon} className='fas fa-question-circle'></i>
              <a>{translations[language]['g6']}</a>
            </div>
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
