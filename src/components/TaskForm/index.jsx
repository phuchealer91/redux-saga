import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import styles from './styles.js';
function TaskForm({ open, handleClose, classes }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
        Thêm mới công việc
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your task here. We will send updates occasionally.
        </DialogContentText>
        <TextField
          id="name"
          label="Tên công việc"
          type="text"
          margin="dense"
          autoFocus
          fullWidth
          className={classes.textField}
        />
        <TextField
          id="description"
          label="Miêu tả công việc"
          type="text"
          margin="dense"
          autoFocus
          fullWidth
        />
      </DialogContent>
      <DialogActions className={classes.dialogControls}>
        <Button onClick={handleClose} variant="contained" color="primary">
          Thêm
        </Button>
        <Button onClick={handleClose} variant="contained" color="secondary">
          Thoát
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(TaskForm);
