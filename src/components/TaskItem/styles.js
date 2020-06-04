const styles = (theme) => ({
  card: {
    minHeight: '450px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    margin: '20px auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  cardContent: {
    flexGrow: 1,
    maxHeight: '100%',
    paddingBottom: 0,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: 10,
    },
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px 8px 8px',
  },
  media: {
    // height: "150px",
    // width: "100%",
    // backgroundPosition: "center center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
    paddingTop: '56.25%', // 16:9,
    cursor: 'pointer',
    // marginTop: "30",
  },
  button: {
    margin: '0 8px 8px 8px',
  },
  startIcon: {
    marginLeft: 0,
    marginRight: 0,
  },
});

export default styles;
