import { connect } from 'react-redux';
import Cart from './Cart';
import { getProduct } from '../../../redux/productsRedux';
import { getAllCart, removeProduct, clearCart, addProduct, removeOneProduct, addComment, getComment  } from '../../../redux/cartRedux';

const getCartComment = (state) => {
  const cartComment = getComment (state);
  return {cartComment};
};
const getCartProducts = (state) => {
  const cartProducts = getAllCart(state);
  let cartTotal = 0;
  return Object.keys(cartProducts).map(key => {
    const { id, name, image, price } = getProduct(state, key);
    cartTotal += price*cartProducts[key];
    return { id, name, image, price, quantity: cartProducts[key], cartTotal };
  });
};
const mapStateToProps = (state) => ({
  cartProducts: getCartProducts(state),
  cartComment: getCartComment(state),
});

const mapDispatcherToProps = dispatcher => ({
  removeProduct: payload => dispatcher(removeProduct(payload)),
  clearCart: () => dispatcher(clearCart()),
  addToCart: payload => dispatcher(addProduct(payload)),
  removeOneFromCart: payload => dispatcher(removeOneProduct(payload)),
  addCartComment: payload => dispatcher(addComment(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Cart);
