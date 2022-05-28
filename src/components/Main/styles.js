import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardHeader: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    boxShadow: "0 8px 40px -12px rgb(0 255 0 / 0.7);",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgb(0 255 0 / 0.7);"
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: '20px 0',
  },
}));
