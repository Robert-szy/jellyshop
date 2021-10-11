import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const Order = props => {
  const {orderProducts, cartComment, clearCart } = props;


  const comment = cartComment.comment;

  let orderTotal = 0;
  if (orderProducts && orderProducts.length !== 0) {orderTotal = orderProducts[orderProducts.length-1].cartTotal;}

  return (
    <div className={styles.root}>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <h3>Podsumowanie zamówienia</h3>
          <div className='table-responsive'>
            <table className='table'>
              <thead className={styles.tableTop}>
                <tr>
                  <th scope='col' className='align-middle text-left'>
                    PRODUKT
                  </th>
                  <th scope='col' className='align-middle text-left'>
                    ILOŚĆ
                  </th>
                  <th scope='col' className='align-middle text-left'>
                    SUMA
                  </th>
                </tr>
              </thead>

              <tbody>
                {orderProducts.map(product => (
                  <tr key={product.id}>
                    <td className='align-middle flex-nowrap' datatitle='PRODUCT'>
                      <div className={styles.productContainer}>
                        <div className={styles.productName}>
                          {product.name}
                        </div>
                      </div>
                    </td>
                    <td className='align-middle' datatitle='QUANTITY'>
                      <div className={styles.quantity}>
                        <div className={styles.number}>
                          {product.quantity}
                        </div>
                      </div>
                    </td>
                    <td className='align-middle' datatitle='TOTAL'>
                      {product.price * product.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <div className={styles.total}>
              <h5>Razem</h5>
              <p>PLN{orderTotal}</p>
            </div>

          </div>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <h3>Uwagi</h3>
            <div className={styles.comment}>
              <p>{comment}</p>
            </div>
            <h3>Podaj swoje dane</h3>
            <input type='text' placeholder='Imię' className={styles.form} id='formName' required></input>
            <input type='email' placeholder='E-mail' className={styles.form} id='formEmail' required></input>
          </div>
        </div>
      </div>
      <div className={styles.sendContainer}>
        <div className={styles.summary}>
          <Link to={`/`} className={styles.checkout}>
            <Button onClick={() => clearCart()} className={styles.checkoutButton}>
              WYŚLIJ ZAMÓWIENIE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {
  orderProducts: PropTypes.array,
  clearCart: PropTypes.func,
  cartComment: PropTypes.string,
};

export default Order;
