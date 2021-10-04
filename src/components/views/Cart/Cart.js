import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const Cart = props => {
  const { cartProducts, removeProduct, addToCart, removeOneFromCart } = props;
  let cartTotal = 0;
  if (cartProducts && cartProducts.length !== 0) {cartTotal = cartProducts[cartProducts.length-1].cartTotal;}

  return (
    <div className={styles.root}>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <div className='table-responsive'>
            <table className='table'>
              <thead className={styles.tableTop}>
                <tr>
                  <th scope='col' className='align-middle text-left'></th>
                  <th scope='col' className='align-middle text-left'>
                    PRODUKT
                  </th>
                  <th scope='col' className='align-middle text-left'>
                    CENA
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
                {cartProducts.map(product => (
                  <tr key={product.id}>
                    <td className={'align-middle ' + styles.product}>
                      <FontAwesomeIcon
                        onClick={() => removeProduct(product.id)}
                        className={styles.delete}
                        icon={faTimes}
                      />
                    </td>
                    <td className='align-middle flex-nowrap' datatitle='PRODUCT'>
                      <div className={styles.productContainer}>
                        <div className={styles.image}>
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className={styles.productName}>
                          {product.name}
                        </div>
                      </div>
                    </td>
                    <td className='align-middle' datatitle='PRICE'>
                      {product.price}
                    </td>
                    <td className='align-middle' datatitle='QUANTITY'>
                      <div className={styles.quantity}>
                        <Button onClick={() => removeOneFromCart(product.id)} className={styles.button1} variant='outline'>
                          -
                        </Button>
                        <div className={styles.number}>
                          {product.quantity}
                        </div>
                        <Button onClick={() => addToCart(product.id)} className={styles.button2} variant='outline'>
                          +
                        </Button>
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
            <h3>Pozostaw komentarz</h3>

            <textarea className={styles.comment} type="text" id="comment"></textarea>

          </div>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <h3>Podsumowanie</h3>
            <div className={styles.total}>
              <h5>Suma</h5>
              <p>PLN{cartTotal}</p>
            </div>
            <Link to={`/order`} className={styles.checkout}>
              <Button className={styles.checkoutButton}>
                PRZEJDŹ DO ZAMÓWIENIA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartProducts: PropTypes.array,
  removeProduct: PropTypes.func,
  clearCart: PropTypes.func,
  addToCart: PropTypes.func,
  removeOneFromCart: PropTypes.func,
};

export default Cart;
