import React from 'react';
import { TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';

function SearchBox({ classes, handleChange }) {
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Name" onChange={handleChange} />
    </form>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
