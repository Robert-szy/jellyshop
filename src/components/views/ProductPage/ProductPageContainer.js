import { connect } from 'react-redux';

import ProductPage from './ProductPage';

import { getAllCat } from '../../../redux/categoriesRedux.js';
// import { openProductPopup } from '../../../redux/prodPopupRedux';
// import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
import { getAll, getProduct } from '../../../redux/productsRedux.js';
import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => ({
  categories: getAllCat(state),
  // products: getNew(state),
  products: getAll(state),
  id: getProduct(state, props.match.params.id),
  // getCompared: getCompared(state),
});

const mapDispatcherToProps = dispatcher => ({
  // openProductPopup: payload => dispatcher(openProductPopup(payload)),
  // addToFavorites: payload => dispatcher(addToFavorites(payload)),
  // removeFromFavorites: payload => dispatcher(removeFromFavorites(payload)),
  // setScreenType: payload => dispatcher(setScreenType(payload)),
  // addToCompare: payload => dispatcher(addToCompare(payload)),
  // removeFromCompare: payload => dispatcher(removeFromCompare(payload)),
  addToCart: payload => dispatcher(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(ProductPage);
