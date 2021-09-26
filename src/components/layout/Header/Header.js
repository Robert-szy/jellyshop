import React from 'react';

import styles from './Header.module.scss';

// import TopBar from '../TopBar/TopBar';
// import CompanyClaim from '../CompanyClaim/CompanyClaimContainer';
import MenuBar from '../MenuBar/MenuBar';
// import Chatbot from '../../features/Chatbot/Chatbot';

const Header = props => (
  <header className={styles.root}>
    {/* <Chatbot /> */}
    {/* <TopBar /> */}
    {/* <CompanyClaim /> */}
    <MenuBar />
  </header>
);

export default Header;
