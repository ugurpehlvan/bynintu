import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Wishlist from '../Modal/Wishlist';

// helpers
import { translations } from 'resources';

// actions
import { changeAppLanguage } from 'store/actions/actions';
class TopHeader extends Component {
  state = {
    display: false,
  };

  handleWishlist = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  render() {
    const { language, changeAppLanguage } = this.props;

    return (
      <>
        <div className='top-header'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-7 col-md-6'>
                <ul className='top-header-nav'>
                  <li>
                    <Link href='/about'>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Our Stores</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact-us'>
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='col-lg-5 col-md-6'>
                <ul className='top-header-right-nav'>
                  <li>
                    <Link href='#'>
                      <a
                        data-toggle='modal'
                        data-target='#shoppingWishlistModal'
                        onClick={(e) => {
                          e.preventDefault();
                          this.handleWishlist();
                        }}
                      >
                        Wishlist <i className='far fa-heart'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/compare'>
                      <a>
                        Compare <i className='fas fa-balance-scale'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <div className='languages-list'>
                      <select onChange={(e) => changeAppLanguage(e.target.value)}>
                        <option value='en'>EngLish</option>
                        <option value='tr'>Turkish</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ''}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.appLanguage,
  };
};

export default connect(mapStateToProps, { changeAppLanguage })(TopHeader);
