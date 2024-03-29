import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Wishlist from '../Modal/Wishlist';

// helpers
import { translations } from 'resources';

// actions
import { changeAppLanguage } from 'store/language/actions';
import { changeAppCountry } from 'store/account/actions';

class TopHeader extends Component {
  state = {
    display: false,
    countryId: null
  };

  componentDidUpdate(prevProps, prevState) {
    const countryId = localStorage.getItem('countryId');
    if (prevState.countryId !== countryId) {
      this.setState({ countryId });
    }
  }

  handleWishlist = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  render() {
    const { language, languages, changeAppLanguage, changeAppCountry, ipToCountry } = this.props;
    const { countryId } = this.state;

    return (
      <>
        <div className='top-header'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-7 col-md-6'>
                <ul className='top-header-nav'>
                  <li>
                    <Link href='/about'>
                      <a>{translations[language]['g7']}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>{translations[language]['g8']}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>{translations[language]['g9']}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact-us'>
                      <a>{translations[language]['g10']}</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='col-lg-5 col-md-6'>
                <ul className='top-header-right-nav'>
                  {/* <li>
                    <Link href='#'>
                      <a
                        data-toggle='modal'
                        data-target='#shoppingWishlistModal'
                        onClick={(e) => {
                          e.preventDefault();
                          this.handleWishlist();
                        }}
                      >
                        {translations[language]['g11']} <i className='far fa-heart'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/compare'>
                      <a>
                        {translations[language]['g12']} <i className='fas fa-balance-scale'></i>
                      </a>
                    </Link>
                  </li> */}
                  <li>
                    <div className='languages-list'>
                      <select onChange={(e) => changeAppLanguage(e.target.value)}>
                        {languages?.map((language) => {
                          const lang = JSON.stringify(language);

                          return (
                            <option key={language.id} value={lang}>
                              {language.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className='languages-list'>
                      <select onChange={(e) => changeAppCountry(e.target.value)} value={countryId} >
                        {ipToCountry?.countries?.map((country) => {
                          return (
                            <option key={country.id} value={country.id}>
                              {country.name}
                            </option>
                          );
                        })}
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

const mapStateToProps = ({ language, ...state }) => {
  return {
    language: language.appLanguage,
    languages: language.languages,
    ipToCountry: state.account.ipToCountry
  };
};

export default connect(mapStateToProps, { changeAppLanguage, changeAppCountry })(TopHeader);
