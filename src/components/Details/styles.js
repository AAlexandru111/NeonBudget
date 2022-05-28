import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgb(0 255 0 / 0.7);",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgb(0 255 0 / 0.7);"
    }
  },
  expense: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgb(255 0 0 / 0.7);",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgb(255 0 0 / 0.7);"
    }
  },
}));
