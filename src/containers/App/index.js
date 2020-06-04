import { ThemeProvider, withStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../commons/Theme';
import TaskBoard from '../TaskBoard';
import styles from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
