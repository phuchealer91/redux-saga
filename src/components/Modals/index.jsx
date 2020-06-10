import { Fade, Grid, Modal, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../actions/modal';
import styles from './styles';

function Modals({ classes }) {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.showModal);
  const title = useSelector((state) => state.modal.title);
  const component = useSelector((state) => state.modal.component);
  function onClose() {
    dispatch(hideModal());
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Grid container className={classes.paper}>
          <div className={classes.heading}>
            <div className={classes.title}>{title}</div>
            <CloseIcon className={classes.icon} onClick={onClose} />
          </div>
          {/* component */}
          {component}
        </Grid>
      </Fade>
    </Modal>
  );
}

Modals.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(Modals);
