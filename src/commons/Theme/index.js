import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  colors: {
    primary: '#303F9F',
    secondary: '#009688',
    error: '#C2185B',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#C2185B',
    textColor: '#ffffff',
    borderColor: '#cccccc',
  },
});

export default theme;
