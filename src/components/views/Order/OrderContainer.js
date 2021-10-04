import { connect } from 'react-redux';
import Order from './Order';
import { getProduct } from '../../../redux/productsRedux';
import { getAllCart, clearCart } from '../../../redux/cartRedux';

const getOrderProducts = (state) => {
  const orderProducts = getAllCart(state);
  let cartTotal = 0;
  return Object.keys(orderProducts).map(key => {
    const { id, name, price } = getProduct(state, key);
    cartTotal += price*orderProducts[key];
    return { id, name, price, quantity: orderProducts[key], cartTotal };
  });
};
const mapStateToProps = (state) => ({
  orderProducts: getOrderProducts(state),
});

const mapDispatcherToProps = dispatcher => ({
  clearCart: () => dispatcher(clearCart()),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Order);
