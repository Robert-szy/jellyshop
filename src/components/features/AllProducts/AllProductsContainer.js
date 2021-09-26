import { connect } from 'react-redux';

import AllProducts from './AllProducts';

import { getAll } from '../../../redux/categoriesRedux.js';
// import { openProductPopup } from '../../../redux/prodPopupRedux';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
import {
  getNew,
// addToFavorites,
// removeFromFavorites,
// addToCompare,
// removeFromCompare,
// getCompared,
} from '../../../redux/productsRedux.js';
import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  screenType: getScreenType(state),
  // getCompared: getCompared(state),
});

const mapDispatcherToProps = dispatcher => ({
  // openProductPopup: payload => dispatcher(openProductPopup(payload)),
  // addToFavorites: payload => dispatcher(addToFavorites(payload)),
  // removeFromFavorites: payload => dispatcher(removeFromFavorites(payload)),
  setScreenType: payload => dispatcher(setScreenType(payload)),
  // addToCompare: payload => dispatcher(addToCompare(payload)),
  // removeFromCompare: payload => dispatcher(removeFromCompare(payload)),
  addToCart: payload => dispatcher(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(AllProducts);
