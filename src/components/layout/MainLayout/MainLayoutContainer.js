import { connect } from 'react-redux';
import MainLayout from './MainLayout';
// import { getProdPopup } from '../../../redux/prodPopupRedux';

const mapStateToProps = state => ({
  // popupShown: getProdPopup(state).isShown,
});

export default connect(mapStateToProps)(MainLayout);
