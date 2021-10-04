import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const Order = props => {
  const {orderProducts, clearCart } = props;
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
                        {/* <Button onClick={() => removeOneFromCart(product.id)} className={styles.button1} variant='outline'>
                          -
                        </Button> */}
                        <div className={styles.number}>
                          {product.quantity}
                        </div>
                        {/* <Button onClick={() => addToCart(product.id)} className={styles.button2} variant='outline'>
                          +
                        </Button> */}
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
            <textarea className={styles.comment} type="text" id="comment"></textarea>

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
  cartTotal: PropTypes.number,
};

export default Order;
