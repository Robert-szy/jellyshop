import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../../common/Button/Button';

const ProductPage = ({ products, categories, cart, addToCart, removeOneFromCart}) => {
  const { id } = useParams();
  const productIndex = products.findIndex(x => x.id === id);
  const productName = products[productIndex].name;
  const productPrice = products[productIndex].price;
  const productImage = products[productIndex].image;
  const categoryIndex = categories.findIndex(x => x.id === products[productIndex].category);
  const category = categories[categoryIndex].name;

  let quantity = cart[products[productIndex].id];
  if (!quantity || quantity<0) quantity = 0;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className={styles.photo}>
              <img
                className={styles.image}
                src={productImage}
                alt=''
              />
            </div>
            <div className={styles.gallery}>
              <Button variant='outline' className={styles.arrow}>
                <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
              </Button>
              <div>
                <img
                  className={styles.smallImage}
                  src={productImage}
                  alt=''
                />
                <img
                  className={styles.smallImage}
                  src={productImage}
                  alt=''
                />
              </div>
              <Button variant='outline' className={styles.arrow}>
                <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
              </Button>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className={styles.title}>
              <h3>{productName}</h3>
            </div>
            <div className={styles.price}>
              <p className={styles.promoPrice}>Cena od {productPrice} złotych</p>
            </div>
            <div className={styles.buttons}>
              <div>
                <Button onClick={() => addToCart(id)} variant='small' className={styles.selected}>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> DODAJ DO KOSZYKA
                </Button>
              </div>
              <div className={styles.quantity}>
                <p>Wybrana ilość:  {quantity}</p>
                <Button onClick={() => addToCart(id)} variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faPlus}>Dodaj jeden</FontAwesomeIcon>
                </Button>
                <Button onClick={() => removeOneFromCart(id)} variant='outline' className={styles.state}>
                  <FontAwesomeIcon icon={faMinus}>Usuń jeden</FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.descripion}>
              <h4>Opis produktu</h4>
              <p>
                Mauris finibus, nulla nec pharetra vulputate, augue metus laoreet massa,
                quis mollis dolor dui non odio. Proin ut leo vitae tellus ultricies
                bibendum. Donec luctus odio id massa mollis, nec auctor nibh
                sollicitudin.
              </p>
            </div>
            <div className={styles.details}>
              <div className='row'>
                <div className='col-lg-2'>
                  <p>Dostępność: </p>
                  <p>Kategoria: </p>
                </div>
                <div className='col-lg-2'>
                  <p className={styles.one}>Na stanie</p>
                  <p className={styles.one}>{category}</p>
                </div>
              </div>
            </div>
            <div className={styles.social}>
              <a className={styles.facebook} href='/#'>
                <FontAwesomeIcon className={styles.iconF} icon={faFacebookF} />
                Share
              </a>
              <a className={styles.link} href='/#'>
                <FontAwesomeIcon className={styles.iconG} icon={faGooglePlusG} />
                Google+
              </a>
              <a className={styles.link} href='/#'>
                <FontAwesomeIcon className={styles.iconT} icon={faTwitter} />
                Tweet
              </a>
              <a className={styles.link} href='/#'>
                <FontAwesomeIcon className={styles.iconP} icon={faPinterestP} />
                Pinterest
              </a>
              <a className={styles.link} href='/#'>
                <FontAwesomeIcon className={styles.iconL} icon={faLinkedinIn} />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
  cart: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      quantity: PropTypes.string,
    })
  ),
  addToCart: PropTypes.func,
  removeOneFromCart: PropTypes.func,
};

ProductPage.defaultProps = {
  categories: [],
  products: [],
  cart: {},
};

export default ProductPage;
