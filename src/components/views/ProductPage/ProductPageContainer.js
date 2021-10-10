import { connect } from 'react-redux';

import ProductPage from './ProductPage';

import { getAllCat } from '../../../redux/categoriesRedux.js';
import { getAll, getProduct } from '../../../redux/productsRedux.js';
import { addProduct, removeOneProduct, getAllCart } from '../../../redux/cartRedux.js';

const mapStateToProps = (state, props) => ({
  categories: getAllCat(state),
  products: getAll(state),
  id: getProduct(state, props.match.params.id),
  cart: getAllCart(state),
});

const mapDispatcherToProps = dispatcher => ({
  addToCart: payload => dispatcher(addProduct(payload)),
  removeOneFromCart: payload => dispatcher(removeOneProduct(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(ProductPage);
