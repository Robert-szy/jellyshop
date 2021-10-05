import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


const ProductBox = ({
  name,
  price,
  image,
  id,
  handleAddClick,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>

      <Link to={`/product/${id}`}>
        <img className={styles.image} src={image} alt={name} />
      </Link>

      <div className={styles.buttons}>
        {/* <Button noJump onClick={() => handlePopupClick(id)} variant='small'>
          Quick View
        </Button> */}
        <Button onClick={() => handleAddClick(id, 1)} variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> DODAJ DO KOSZYKA
        </Button>
      </div>
    </div>
    <div className={styles.content}>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
      </div>
    </div>
    <div className={styles.price_old}>
      Cena od:<span> {price}</span> złotych
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.node,
  id: PropTypes.string,
  handleAddClick: PropTypes.func,
};

export default ProductBox;
