import React, { Component } from 'react';
import Link from 'next/link';
import LeftFilter from '../Modal/LeftFilter';

class ProductsFilterOptions extends Component {
  state = {
    display: false,
  };

  //   handleGrid = (evt, e) => {
  //     this.props.onClick(e);
  //     let i, aLinks;

  //     aLinks = document.getElementsByTagName('a');
  //     for (i = 0; i < aLinks.length; i++) {
  //       aLinks[i].className = aLinks[i].className.replace('active', '');
  //     }

  //     evt.currentTarget.className += ' active';
  //   };

  handleLeftFilter = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  render() {
    return (
      <>
        <div className='products-filter-options'>
          <div className='row align-items-center'>
            <div className='col d-flex'>
              <span>
                <Link href='#'>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleLeftFilter();
                    }}
                  >
                    <i className='fas fa-filter'></i> Filter
                  </a>
                </Link>
              </span>
            </div>
            <div className='col d-flex'>
              <span>Sort:</span>

              <div className='products-ordering-list'>
                <select>
                  <option value='1'>Featured</option>
                  <option value='2'>Best Selling</option>
                  <option value='3'>Price Ascending</option>
                  <option value='4'>Price Descending</option>
                  <option value='5'>Date Ascending</option>
                  <option value='6'>Date Descending</option>
                  <option value='7'>Name Ascending</option>
                  <option value='8'>Name Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {this.state.display ? <LeftFilter onClick={this.handleLeftFilter} /> : ''}
      </>
    );
  }
}

export default ProductsFilterOptions;
