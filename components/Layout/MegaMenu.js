import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import Link from 'next/link';
import Router from 'next/router';

// actions
import { getCategoryTree } from 'store/category/actions';

// helpers
import { translations } from 'resources';

import Cart from '../Modal/Cart';

class MegaMenu extends Component {
  state = {
    display: false,
    searchForm: false,
    collapsed: true,
    collapseHomeItems: false,
    collapseShopItems: false,
    collapseWomenItems: false,
    collapseMenItems: false,
    collapseTodayItems: false,
    collapsePagesItems: false,
    collapseBlogItems: false,
  };

  handleCart = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  handleMyAccountClick = () => {
    Router.push('/my-account/my-orders');
  };

  handleItemClick = (e, key) => {
    e.preventDefault();
    if (key === 'home') {
      this.setState({ collapseHomeItems: !this.state.collapseHomeItems });
    }
    if (key === 'shop') {
      this.setState({ collapseShopItems: !this.state.collapseShopItems });
    }
    if (key === 'women') {
      this.setState({ collapseWomenItems: !this.state.collapseWomenItems });
    }
    if (key === 'men') {
      this.setState({ collapseMenItems: !this.state.collapseMenItems });
    }
    if (key === 'today') {
      this.setState({ collapseTodayItems: !this.state.collapseTodayItems });
    }
    if (key === 'page') {
      this.setState({ collapsePagesItems: !this.state.collapsePagesItems });
    }
    if (key === 'blog') {
      this.setState({ collapseBlogItems: !this.state.collapseBlogItems });
    }
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    this.props.getCategoryTree();

    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const {
      collapsed,
      collapseHomeItems,
      collapseShopItems,
      collapseWomenItems,
      collapseMenItems,
      collapseTodayItems,
      collapsePagesItems,
      collapseBlogItems,
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    let { products, user, language, categories } = this.props;
    console.log('categoreis', categories);

    const menu = (
      <Menu style={{ width: '200px' }}>
        {user?.firstName && user?.lastName && (
          <>
            <Menu.Item>
              <div style={{ color: '#8d0000', fontWeight: '500', fontSize: '15px' }}>
                {user?.firstName} {user?.lastName}
              </div>
            </Menu.Item>
            <Menu.Divider />
          </>
        )}
        <Menu.Item>
          <Link href='/my-account/user-info'>
            <a>
              <i style={{ color: '#999', marginRight: '6px' }} className='fas fa-user' /> {translations[language]['g1']}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/my-account/help'>
            <a target='_blank' rel='noopener noreferrer'>
              <i style={{ color: '#999', marginRight: '6px' }} className='fas fa-question-circle' />
              Help
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a>
            <i style={{ color: '#999', marginRight: '6px' }} className='fas fa-sign-out-alt'></i> Log Out
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <>
        <div className='navbar-area'>
          <div id='navbar' className='comero-nav'>
            <div className='container'>
              <nav className='navbar navbar-expand-md navbar-light'>
                <Link href='/'>
                  <a className='navbar-brand'>
                    <img src={require('../../images/logo.png')} alt='logo' />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='icon-bar top-bar'></span>
                  <span className='icon-bar middle-bar'></span>
                  <span className='icon-bar bottom-bar'></span>
                </button>

                <div style={{ flexDirection: 'column' }} className={classOne} id='navbarSupportedContent'>
                  <div className='others-option'>
                    <div style={{ display: 'inline-block', marginRight: '17px' }}>
                      <div
                        style={{ display: 'block', position: 'relative', padding: 0, marginTop: 0, boxShadow: 0 }}
                        className='search-overlay search-popup'
                      >
                        <div className='search-box'>
                          <form className='search-form'>
                            <input className='search-input' name='search' placeholder='Search' type='text' />
                            <button className='search-button' type='submit'>
                              <i className='fas fa-search'></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className='option-item'>
                      {user ? (
                        <Dropdown overlay={menu} placement='bottomCenter' arrow>
                          <div style={{ cursor: 'pointer' }} onClick={this.handleMyAccountClick}>
                            My Account
                          </div>
                        </Dropdown>
                      ) : (
                        <Link href='/login'>
                          <a>Login</a>
                        </Link>
                      )}
                    </div>

                    <div className='option-item'>
                      <Link href='#'>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.handleCart();
                          }}
                        >
                          Cart({products.length}) <i className='fas fa-shopping-bag'></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <ul className='navbar-nav'>
                    {categories?.map((category) => {
                      return (
                        <li className='nav-item megamenu'>
                          <Link href='#'>
                            <a className='nav-link' onClick={(e) => this.handleItemClick(e, 'women')}>
                              {category?.name} <i className='fas fa-chevron-down'></i>
                            </a>
                          </Link>
                          {(collapseWomenItems || collapsed) && (
                            <ul className='dropdown-menu'>
                              <li className='nav-item'>
                                <div className='container'>
                                  <div className='row'>
                                    {category?.subCategories.map((subCategory1) => {
                                      return (
                                        <div className='col'>
                                          <h6 className='submenu-title'>{subCategory1?.name}</h6>

                                          <ul className='megamenu-submenu'>
                                            {subCategory1.subCategories.map((subCategory2) => {
                                              return (
                                                <li>
                                                  <Link href='/category-without-sidebar-fullwidth'>
                                                    <a>{subCategory2.name}</a>
                                                  </Link>
                                                </li>
                                              );
                                            })}
                                          </ul>
                                        </div>
                                      );
                                    })}

                                    <div className='col'>
                                      <ul className='megamenu-submenu'>
                                        <li>
                                          <div className='aside-trending-products'>
                                            <img src={require('../../images/category-products-img2.jpg')} alt='image' />

                                            <div className='category'>
                                              <h4>Top Trending</h4>
                                            </div>

                                            <a href='#'></a>
                                          </div>

                                          <div className='aside-trending-products'>
                                            <img src={require('../../images/category-products-img3.jpg')} alt='image' />

                                            <div className='category'>
                                              <h4>Popular Products</h4>
                                            </div>

                                            <a href='#'></a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
      </>
    );
  }
}

const mapStateToProps = ({ other, auth, language, category }) => {
  return {
    products: other.addedItems,
    isSignedIn: auth.isSignedIn,
    user: auth.customer,
    language: language.appLanguage,
    categories: category.categories,
  };
};

export default connect(mapStateToProps, { getCategoryTree })(MegaMenu);
