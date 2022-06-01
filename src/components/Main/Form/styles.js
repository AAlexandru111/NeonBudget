import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  button: {
    border: "none",
    color: "#ff6347",
    boxShadow: "0 0 5px #ff6347",
    // transition: "all 0.3s ease",
    "&:hover" : {
      boxShadow: "0 0 10px #4CAF50, 0 0 20px #4CAF50, 0 0 20px #fff inset",
    },
  },
}));
