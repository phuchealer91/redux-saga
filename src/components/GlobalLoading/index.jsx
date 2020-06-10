import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import LoadingIcon from '../../assets/images/loading.gif';
import { useSelector } from 'react-redux';

function GlobalLoading({ classes }) {
  const showLoading = useSelector((state) => state.ui.showLoading);
  let xhtml = null;
  if (showLoading) {
    xhtml = (
      <div className={classes.globalLoading}>
        <img src={LoadingIcon} alt="Loading" className={classes.icon} />
      </div>
    );
  }
  return xhtml;
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};
export default withStyles(styles)(GlobalLoading);
