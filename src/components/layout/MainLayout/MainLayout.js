import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import ProductPopup from '../../features/ProductPopup/ProductPopupContainer';

const MainLayout = ({ children }) => (
  <div>
    {/* {popupShown && <ProductPopup />} */}
    <Header />
    {children}
    {/* <Footer /> */}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  // popupShown: PropTypes.bool,
};

export default MainLayout;
