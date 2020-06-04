const styles = (theme) => ({
  taskboard: {},
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  shape: {
    backgroundColor: theme.colors.primary,
    color: theme.shape.textColor,
    borderRadius: '6px',
    boxShadow: '0 2px 1px 0 rgba(0,0,0,0.19)',
    padding: 20,
    margin: 10,
  },
  button: {
    margin: '44px 24px 0 24px',
  },
});
export default styles;
