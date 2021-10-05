import { connect } from 'react-redux';
import Order from './Order';
import { getProduct } from '../../../redux/productsRedux';
import { getAllCart, getComment, clearCart } from '../../../redux/cartRedux';

const getOrderProducts = (state) => {
  const orderProducts = getAllCart(state);
  let cartTotal = 0;
  // const comment = getComment(state);
  return Object.keys(orderProducts).map(key => {
    const { id, name, price } = getProduct(state, key);
    cartTotal += price*orderProducts[key];
    return { id, name, price, quantity: orderProducts[key], cartTotal };
  });
};

const getCartComment = (state) => {
  const cartComment = getComment (state);
  console.log('cartcoment in ord container', cartComment);
  return cartComment;
};

const mapStateToProps = (state) => ({
  orderProducts: getOrderProducts(state),
  cartComment: getCartComment(state),
});

const mapDispatcherToProps = dispatcher => ({
  clearCart: () => dispatcher(clearCart()),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Order);
