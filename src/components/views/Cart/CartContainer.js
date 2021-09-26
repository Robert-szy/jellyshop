import { connect } from 'react-redux';
import Cart from './Cart';
import { getProduct } from '../../../redux/productsRedux';
import { getAll } from '../../../redux/cartRedux';

const getCartProducts = (state) => {
  const cartProducts = getAll(state);
  return Object.keys(cartProducts).map(key => {
    const { id, name, image, price } = getProduct(state, key);
    return { id, name, image, price, quantity: cartProducts[key] };
  });
};
const mapStateToProps = (state) => ({
  cartProducts: getCartProducts(state),
});

// const mapDispatcherToProps = dispatcher => ({
//   removeProduct: payload => dispatcher(removeProduct(payload)),
//   clearCart: () => dispatcher(clearCart()),
// });

export default connect(mapStateToProps)(Cart);
