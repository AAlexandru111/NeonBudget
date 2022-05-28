import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  button: {
    border: "none",
    color: "#ff9aff",
    boxShadow: "0 0 5px #ef97e8",
    // transition: "all 0.3s ease",
    "&:hover" : {
      boxShadow: "0 0 10px #ef97e8, 0 0 20px #ef97e8, 0 0 20px #fff inset",
    },
  },
}));
