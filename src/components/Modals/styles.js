const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    backgroundColor: '#C51162',
    padding: theme.spacing(2),
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#fff',
  },
  icon: {
    fontSize: '1.4rem',
    color: '#fff',
    cursor: 'pointer',
  },
  paper: {
    backgroundColor: '#fff',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
    overflow: 'hidden',
    width: 500,
    '&:focus': {
      outline: 'none',
    },
  },
});

export default styles;
