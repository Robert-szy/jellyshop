import React from 'react';
import PropTypes from 'prop-types';
import styles from './AllProducts.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { SIZE_TYPES } from '../../../settings';
import Swipeable from '../../common/Swipeable/Swipeable';
import { Link } from 'react-router-dom';
class AllProducts extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'jelly',
    activePageStyle: styles.fadeIn,
  };

  handlePageChange(newPage) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activePage: newPage, activePageStyle: styles.fadeIn });
    }, 1000);
  }

  handleCategoryChange(newCategory) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory, activePage: 0, activePageStyle: styles.fadeIn });
    }, 1000);
  }

  handleAddClick = (id, quantity) => {
    const { addToCart } = this.props;
    addToCart(id, quantity);
  };

  selectActualScreenType = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return SIZE_TYPES.MOBILE;
    } else if (width < 992) {
      return SIZE_TYPES.TABLET;
    } else {
      return SIZE_TYPES.DESKTOP;
    }
  };
  handleSizeChange = storedType => {
    const actualType = this.selectActualScreenType();
    if (actualType !== storedType) {
      this.props.setScreenType(actualType);
    }
  };
  componentDidMount() {
    this.handleSizeChange(this.props.screenType);
    window.addEventListener('resize', () =>
      this.handleSizeChange(this.props.screenType)
    );
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () =>
      this.handleSizeChange(this.props.screenType)
    );
  }

  render() {
    const {
      categories,
      products,
      maxProductsOnPage,
      screenType,
    } = this.props;
    const { activeCategory, activePage, activePageStyle } = this.state;
    const productsPerPage = {
      [SIZE_TYPES.MOBILE]: 2,
      [SIZE_TYPES.TABLET]: 3,
      [SIZE_TYPES.DESKTOP]: 6,
    };
    const actualProductsOnPage = Math.min(
      productsPerPage[screenType],
      maxProductsOnPage
    );
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / actualProductsOnPage);

    const rightAction = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const leftAction = () => {
      const newPage = activePage + 1;
      if (newPage < pagesCount) {
        this.setState({ activePage: newPage });
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <Link
            to='/#'
            onClick={() => {
              this.handlePageChange(i);
            }}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </Link>
        </li>
      );
    }

    return (
      <div className={styles.allproducts}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.banner}>
              <img src='images/baner.jpg' alt='banner' />
              <div className={styles.bannertext}>Galaretka naturalnie...</div>
            </div>
          </div>
        </div>
        <Swipeable leftAction={leftAction} rightAction={rightAction}>
          <div className={styles.root}>
            <div className='container'>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>
                  <div className={'col-auto col-md ' + styles.menu}>
                    <ul>
                      {categories.map(item => (
                        <li key={item.id}>
                          <Link
                            to='/#'
                            className={
                              item.id === activeCategory ? styles.active : undefined
                            }
                            onClick={() => {
                              this.handleCategoryChange(item.id);
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={'col-12 col-sm-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </div>
              </div>
              <div className={'row ' + activePageStyle}>
                {categoryProducts
                  .slice(
                    activePage * actualProductsOnPage,
                    (activePage + 1) * actualProductsOnPage
                  )
                  .map(item => (
                    <div key={item.id} className='col-6 col-md-4 col-lg-4'>
                      <ProductBox
                        {...item}
                        handleAddClick={this.handleAddClick}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Swipeable>
      </div>
    );
  }
}

AllProducts.propTypes = {
  screenType: PropTypes.string,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      // stars: PropTypes.number,
      // promo: PropTypes.string,
      newProduct: PropTypes.bool,
      // favorite: PropTypes.bool,
      // compare: PropTypes.bool,
    })
  ),
  // cart: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string,
  //     quantity: PropTypes.number,
  //   })
  // ),
  // openProductPopup: PropTypes.func,
  setScreenType: PropTypes.func,
  // addToFavorites: PropTypes.func,
  // removeFromFavorites: PropTypes.func,
  maxProductsOnPage: PropTypes.number,
  // addToCompare: PropTypes.func,
  // removeFromCompare: PropTypes.func,
  // handleCompareClick: PropTypes.func,
  // getCompared: PropTypes.array,
  addToCart: PropTypes.func,
};

AllProducts.defaultProps = {
  categories: [],
  products: [],
  maxProductsOnPage: 8,
};

export default AllProducts;
