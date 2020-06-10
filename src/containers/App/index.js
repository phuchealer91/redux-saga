import { ThemeProvider, withStyles } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../commons/Theme';
import configureStore from '../../redux/store/configureStore';
import TaskBoard from '../TaskBoard';
import styles from './styles';
import GlobalLoading from '../../components/GlobalLoading';
import Modals from '../../components/Modals';
// store
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer
          autoClose={2000}
          draggable
          hideProgressBar={false}
          pauseOnHover
        />
        <GlobalLoading />
        <TaskBoard />
        <Modals />
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
