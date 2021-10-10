import React from 'react';

import styles from './Header.module.scss';

import MenuBar from '../MenuBar/MenuBar';

const Header = props => (
  <header className={styles.root}>
    <MenuBar />
  </header>
);

export default Header;
