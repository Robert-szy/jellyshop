import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const Cart = props => {
  const { cartProducts, removeProduct, clearCart } = props;
  return (
    <div className={styles.root}>
      {/* <div className={styles.top}>
        <h3>Koszyk</h3>
        <div className={styles.right}>
          <FontAwesomeIcon className={styles.sign} icon={faHome} />
          <FontAwesomeIcon className={styles.sign} icon={faChevronRight} />
          <p>Cart</p>
        </div>
      </div> */}
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {/* <div className='table-responsive'> */}
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
                      <div className={styles.productName}>{product.name}</div>
                    </div>
                  </td>
                  <td className='align-middle' datatitle='PRICE'>
                    {product.price}
                  </td>
                  {/* <td className={'align-middle ' + styles.quantityContainer} datatitle='QUANTITY'> */}
                  <td className='align-middle' datatitle='QUANTITY'>
                    <div className={styles.quantity}>
                      <Button className={styles.button1} variant='outline'>
                        -
                      </Button>
                      <div className={styles.number}>
                        <input defaultValue='2'></input>
                      </div>
                      <Button className={styles.button2} variant='outline'>
                        +
                      </Button>
                    </div>
                  </td>
                  <td className='align-middle' datatitle='TOTAL'>
                    PLN5.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* </div> */}
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <h3>Podsumowanie</h3>
            <div className={styles.subtotal}>
              <h5>Suma pośrednia</h5>
              <p>PLN92.00</p>
            </div>
            <div className={styles.total}>
              <h5>Suma</h5>
              <p>PLN92.00</p>
            </div>
            <Link to={`/`} className={styles.checkout}>
              <Button onClick={() => clearCart()} className={styles.checkoutButton}>
                PRZEJDŹ DO PŁATNOŚCI
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
};

export default Cart;
