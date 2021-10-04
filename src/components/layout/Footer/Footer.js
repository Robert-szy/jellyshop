import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-lg-3'>
            <div className={styles.menuWrapper}>
              <h6>Informacje</h6>
              <ul>
                <li>
                  <Link to='/#'>O nas</Link>
                </li>
                <li>
                  <Link to='/#'>Polityka bezpieczeństwa</Link>
                </li>
                <li>
                  <Link to='/#'>Warunki</Link>
                </li>
                <li>
                  <Link to='/#'>Obsługa</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-3'>
            <div className={styles.menuWrapper}>
              {/* <h6>My account</h6>
              <ul>
                <li>
                  <Link to='/#'>Login</Link>
                </li>
                <li>
                  <Link to='/#'>My cart</Link>
                </li>
                <li>
                  <Link to='/#'>Wishlist</Link>
                </li>
                <li>
                  <Link to='/#'>Checkout</Link>
                </li>
              </ul> */}
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-3'>
            <div className={styles.menuWrapper}>
              {/* <h6>Information</h6>
              <ul>
                <li>
                  <Link to='/#'>Specials</Link>
                </li>
                <li>
                  <Link to='/#'>New products</Link>
                </li>
                <li>
                  <Link to='/#'>Best Sellers</Link>
                </li>
                <li>
                  <Link to='/#'>Out Stores</Link>
                </li>
              </ul> */}
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-3'>
            <div className={styles.menuWrapper}>
              {/* <h6>Orders</h6>
              <ul>
                <li>
                  <Link to='/#'>Payment options</Link>
                </li>
                <li>
                  <Link to='/#'>Shipping and delivery</Link>
                </li>
                <li>
                  <Link to='/#'>Returns</Link>
                </li>
                <li>
                  <Link to='/#'>Shipping</Link>
                </li>
              </ul> */}
            </div>
            {/* <div className={styles.creditCards}>
              <img src='./images/cards.png' alt='Supported credit cards' />
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-12 col-lg-4'></div>
          <div className={'col-12 col-sm-6 col-lg-4 text-center ' + styles.copyright}>
            {/* <p>©Copyright | All Rights Reserved</p> */}
          </div>
          <div className={'col-12 col-sm-6 col-lg-4 text-right ' + styles.socialMedia}>
            <ul>
              <li>
                <Link to='/#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </Link>
              </li>
              <li>
                <Link to='/#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </Link>
              </li>
              <li>
                <Link to='/#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </Link>
              </li>
              <li>
                <Link to='/#'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </Link>
              </li>
              <li>
                <Link to='/#'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </Link>
              </li>
              <li>
                <Link to='/#'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
