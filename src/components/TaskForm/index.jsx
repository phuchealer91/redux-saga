import { Box, Button, TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

function TaskForm({ onClose, classes }) {
  return (
    <form action="" className={classes.form}>
      <TextField
        id="name"
        label="Tên công việc"
        type="text"
        margin="dense"
        autoFocus
        className={classes.textField}
      />
      <TextField
        id="description"
        label="Miêu tả công việc"
        type="text"
        margin="dense"
        className={classes.textField}
      />

      <Box className={classes.dialogControls}>
        <Button onClick={onClose} variant="contained" color="primary">
          Hủy
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Thêm
        </Button>
      </Box>
    </form>
  );
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func,
};

export default withStyles(styles)(TaskForm);
