import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import Link from 'next/link';
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
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    let { products, user } = this.props;

    const menu = (
      <Menu style={{ width: '200px' }}>
        {user?.firstName && user?.lastName && (
          <>
            <Menu.Item>
              {user?.firstName} {user?.lastName}
            </Menu.Item>
            <Menu.Divider />
          </>
        )}
        <Menu.Item>
          <Link href='/my-account/user-info'>
            <a>User Info</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/my-account/help'>
            <a target='_blank' rel='noopener noreferrer'>
              Help
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a>Log Out</a>
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

                <div className={classOne} id='navbarSupportedContent'>
                  <ul className='navbar-nav'>
                    <li className='nav-item p-relative'>
                      <Link href='#'>
                        <a className='nav-link active' onClick={(e) => this.handleItemClick(e, 'home')}>
                          Home <i style={{ cursor: 'pointer' }} className='fas fa-chevron-down'></i>
                        </a>
                      </Link>
                      {(collapseHomeItems || collapsed) && (
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/'>
                              <a className='nav-link'>Home</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link href='/covid-19'>
                              <a className='nav-link'>
                                Covid-19
                                <span className='new'>New</span>
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/grocery'>
                              <a className='nav-link'>
                                Grocery
                                <span className='new'>New</span>
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/electronics'>
                              <a className='nav-link'>
                                Electronics
                                <span className='new'>New</span>
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/furniture'>
                              <a className='nav-link'>
                                Furniture
                                <span className='new'>New</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className='nav-item megamenu'>
                      <Link href='#'>
                        <a className='nav-link' onClick={(e) => this.handleItemClick(e, 'shop')}>
                          Shop <i className='fas fa-chevron-down'></i>
                        </a>
                      </Link>
                      {(collapseShopItems || collapsed) && (
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <div className='container'>
                              <div className='row'>
                                <div className='col'>
                                  <h6 className='submenu-title'>Collection Layouts</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/collections-style-one'>
                                        <a>Collections Type 1</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/collections-style-two'>
                                        <a>Collections Type 2</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Left Sidebar</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Left Sidebar With HTML Block</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Right Sidebar</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar-with-block'>
                                        <a>Right Sidebar With HTML Block</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Without Sidebar</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>With Sidebar Full Width</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar-fullwidth'>
                                        <a>Without Sidebar Full Width</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <h6 className='submenu-title'>Other Pages</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/cart'>
                                        <a>Cart</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/checkout'>
                                        <a>Checkout</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/compare'>
                                        <a>Compare</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/login'>
                                        <a>Login</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/signup'>
                                        <a>Signup</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/customer-service'>
                                        <a>Customer Service</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <h6 className='submenu-title'>Top Brands</h6>

                                  <ul className='megamenu-submenu top-brands'>
                                    <li>
                                      <Link href='#'>
                                        <a>
                                          <img src={require('../../images/partner1.png')} alt='image' />
                                        </a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='#'>
                                        <a>
                                          <img src={require('../../images/partner2.png')} alt='image' />
                                        </a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='#'>
                                        <a>
                                          <img src={require('../../images/partner3.png')} alt='image' />
                                        </a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='#'>
                                        <a>
                                          <img src={require('../../images/partner4.png')} alt='image' />
                                        </a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='#'>
                                        <a>
                                          <img src={require('../../images/partner5.png')} alt='image' />
                                        </a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='#'>
                                        <a>
                                          <img src={require('../../images/partner6.png')} alt='image' />
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className='nav-item megamenu'>
                      <Link href='#'>
                        <a className='nav-link' onClick={(e) => this.handleItemClick(e, 'women')}>
                          Women's <i className='fas fa-chevron-down'></i>
                        </a>
                      </Link>
                      {(collapseWomenItems || collapsed) && (
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <div className='container'>
                              <div className='row'>
                                <div className='col'>
                                  <h6 className='submenu-title'>Clothing</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-without-sidebar-fullwidth'>
                                        <a>Coats</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Jackets</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Blazers</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Dresses</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Trousers</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar-with-block'>
                                        <a>Jeans</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Sweatshirts</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>T-Shirts</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <h6 className='submenu-title'>Shoes</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-without-sidebar-fullwidth'>
                                        <a>Trainers</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Boots</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Heels</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Flats</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar-with-block'>
                                        <a>Heeled Sandals</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Platforms</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <h6 className='submenu-title'>Accessories</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Bags</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Glasses</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar-with-block'>
                                        <a>Jewellery</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>iPhone Cases</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Gadgets</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Hats & Beanie</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar-fullwidth'>
                                        <a>Purses</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

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

                    <li className='nav-item megamenu'>
                      <Link href='#'>
                        <a className='nav-link' onClick={(e) => this.handleItemClick(e, 'men')}>
                          Men's <i className='fas fa-chevron-down'></i>
                        </a>
                      </Link>
                      {(collapseMenItems || collapsed) && (
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <div className='container'>
                              <div className='row'>
                                <div className='col'>
                                  <h6 className='submenu-title'>Clothing</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Coats</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Jackets</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Jeans</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar-with-block'>
                                        <a>T-Shirts</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Sweatshirts</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Knitwear</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Shirts</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <h6 className='submenu-title'>Shoes</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-without-sidebar-fullwidth'>
                                        <a>Trainers</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Boots</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Heels</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Flats</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Heeled Sandals</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar-with-block'>
                                        <a>Sandals</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Platforms</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Heeled Sandals</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <h6 className='submenu-title'>Accessories</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Bags</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Backpacks</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Glasses</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Earrings</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>iPhone Cases</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Mobile Accessories</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar-fullwidth'>
                                        <a>Socks</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <div className='aside-trending-products'>
                                        <img src={require('../../images/category-products-img2.jpg')} alt='image' />

                                        <div className='category'>
                                          <h4>Top Trending</h4>
                                        </div>
                                        <Link href='#'>
                                          <a></a>
                                        </Link>
                                      </div>

                                      <div className='aside-trending-products'>
                                        <img src={require('../../images/category-products-img3.jpg')} alt='image' />

                                        <div className='category'>
                                          <h4>Popular Products</h4>
                                        </div>

                                        <Link href='#'>
                                          <a></a>
                                        </Link>
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

                    <li className='nav-item megamenu'>
                      <Link href='#'>
                        <a className='nav-link' onClick={(e) => this.handleItemClick(e, 'today')}>
                          Today's Deals <i className='fas fa-chevron-down'></i>
                        </a>
                      </Link>
                      {(collapseTodayItems || collapsed) && (
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <div className='container'>
                              <div className='row'>
                                <div className='col'>
                                  <h6 className='submenu-title'>Clothing</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Coats</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Jackets</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Jeans</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar-with-block'>
                                        <a>T-Shirts</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Sweatshirts</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Knitwear</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Shirts</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <h6 className='submenu-title'>Shoes</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-without-sidebar-fullwidth'>
                                        <a>Trainers</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>Boots</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Heels</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Flats</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Heeled Sandals</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar-with-block'>
                                        <a>Sandals</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar-with-block'>
                                        <a>Platforms</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Heeled Sandals</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <h6 className='submenu-title'>Accessories</h6>

                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <Link href='/category-without-sidebar'>
                                        <a>Bags</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Backpacks</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Glasses</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-left-sidebar'>
                                        <a>Earrings</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-sidebar-fullwidth'>
                                        <a>iPhone Cases</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-right-sidebar'>
                                        <a>Mobile Accessories</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href='/category-without-sidebar-fullwidth'>
                                        <a>Socks</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className='col'>
                                  <ul className='megamenu-submenu'>
                                    <li>
                                      <div className='aside-trending-products'>
                                        <img src={require('../../images/category-products-img2.jpg')} alt='image' />

                                        <div className='category'>
                                          <h4>Top Trending</h4>
                                        </div>
                                        <Link href='#'>
                                          <a></a>
                                        </Link>
                                      </div>

                                      <div className='aside-trending-products'>
                                        <img src={require('../../images/category-products-img3.jpg')} alt='image' />

                                        <div className='category'>
                                          <h4>Popular Products</h4>
                                        </div>

                                        <Link href='#'>
                                          <a></a>
                                        </Link>
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

                    <li className='nav-item p-relative'>
                      <Link href='#'>
                        <a className='nav-link' onClick={(e) => this.handleItemClick(e, 'page')}>
                          Pages <i className='fas fa-chevron-down'></i>
                        </a>
                      </Link>
                      {(collapsePagesItems || collapsed) && (
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/about'>
                              <a className='nav-link'>About Us</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/sizing-guide'>
                              <a className='nav-link'>Sizing Guide</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/gallery'>
                              <a className='nav-link'>Gallery</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <a href='#' className='nav-link' onClick={(e) => e.preventDefault()}>
                              Account
                            </a>
                            <ul className='dropdown-menu'>
                              <li className='nav-item'>
                                <Link href='/login'>
                                  <a className='nav-link'>Login</a>
                                </Link>
                              </li>

                              <li className='nav-item'>
                                <Link href='/signup'>
                                  <a className='nav-link'>Signup</a>
                                </Link>
                              </li>

                              <li className='nav-item'>
                                <Link href='/cart'>
                                  <a className='nav-link'>Cart</a>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className='nav-item'>
                            <Link href='/cart'>
                              <a className='nav-link'>Cart</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/checkout'>
                              <a className='nav-link'>Checkout</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/compare'>
                              <a className='nav-link'>Compare</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/customer-service'>
                              <a className='nav-link'>Customer Service</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/login'>
                              <a className='nav-link'>Login</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/signup'>
                              <a className='nav-link'>Signup</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/faq'>
                              <a className='nav-link'>FAQs</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/404'>
                              <a className='nav-link'>Error 404</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/contact-us'>
                              <a className='nav-link'>Contact Us</a>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className='nav-item p-relative'>
                      <Link href='#'>
                        <a className='nav-link' onClick={(e) => this.handleItemClick(e, 'blog')}>
                          Blog <i className='fas fa-chevron-down'></i>
                        </a>
                      </Link>
                      {(collapseBlogItems || collapsed) && (
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/blog'>
                              <a className='nav-link'>Blog Grid (3 in Row)</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/blog2'>
                              <a className='nav-link'>Blog Grid (2 in Row)</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/blog3'>
                              <a className='nav-link'>Blog Grid (1 in Row)</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/blog-details'>
                              <a className='nav-link'>Blog Details</a>
                            </Link>

                            <Link href='/blog-details-two'>
                              <a className='nav-link'>Blog Details Two</a>
                            </Link>

                            <Link href='/blog-details-three'>
                              <a className='nav-link'>Blog Details Three</a>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>

                  <div className='others-option'>
                    <div className='option-item'>
                      <i
                        onClick={this.handleSearchForm}
                        className='search-btn fas fa-search'
                        style={{
                          display: this.state.searchForm ? 'none' : 'block',
                        }}
                      ></i>

                      <i
                        onClick={this.handleSearchForm}
                        className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                      ></i>

                      <div
                        className='search-overlay search-popup'
                        style={{
                          display: this.state.searchForm ? 'block' : 'none',
                        }}
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
                          <a>My Account</a>
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

const mapStateToProps = (state) => {
  return {
    products: state.other.addedItems,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(MegaMenu);
