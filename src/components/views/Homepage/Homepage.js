import React from 'react';
import styles from './Homepage.module.scss';

import AllProducts from '../../features/AllProducts/AllProductsContainer';

const Homepage = () => (
  <div className={styles.root}>

    <AllProducts />

  </div>
);

export default Homepage;
