import { connect } from 'react-redux';

import AllProducts from './AllProducts';

import { getAllCat } from '../../../redux/categoriesRedux.js';
import { getScreenType, setScreenType } from '../../../redux/screenTypeRedux';
import { getNew} from '../../../redux/productsRedux.js';
import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  categories: getAllCat(state),
  products: getNew(state),
  screenType: getScreenType(state),
});

const mapDispatcherToProps = dispatcher => ({
  setScreenType: payload => dispatcher(setScreenType(payload)),
  addToCart: payload => dispatcher(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(AllProducts);
