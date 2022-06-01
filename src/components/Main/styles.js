import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  '@keyframes glow': {
    "0%,100%": { textShadow:`0 0 30px #02D785` },
    "25%":{ textShadow:`0 0 30px orange` },
    "50%":{ textShadow:`0 0 30px forestgreen` },
    "75%":{ textShadow:`0 0 30px yellow` },
  },
  '@keyframes neon': {
    "0%": {
      textShadow: `0vw 0vw 1vw #FA1C16, 0vw 0vw 3vw #FA1C16, 0vw 0vw 10vw #FA1C16, 0vw 0vw 10vw #FA1C16, 0vw 0vw .4vw #FED128, .5vw .5vw .1vw #806914`,
      color: '#FED128',
    },
    "100%": {
      textShadow: `0vw 0vw 1vw #FA1C16, 0vw 0vw 3vw #FA1C16, 0vw 0vw 10vw #FA1C16, 0vw 0vw 10vw #FA1C16, 0vw 0vw .4vw #FED128, .5vw .5vw .1vw #806914`,
      color: '#FED128',
    },
    "50%": {
      textShadow: `0vw 0vw .5vw #800E0B, 0vw 0vw 1.5vw #800E0B, 0vw 0vw 5vw #800E0B, 0vw 0vw 5vw #800E0B, 0vw 0vw .2vw #800E0B, .5vw .5vw .1vw #40340A`,
      color: '#806914',
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardHeader: {
    borderBottom: '10px solid rgba(255, 99, 71, 0.7)',
    textAlign: 'center',
    
    '& .MuiCardHeader-title': {
      fontFamily: 'Bebas Neue',
      fontSize: '3vw',
      animation: `$neon 4s ease infinite`,
      color: '#FED128',
      textShadow: `0vw 0vw 1vw #FA1C16, 0vw 0vw 3vw #FA1C16, 0vw 0vw 10vw #FA1C16, 0vw 0vw 10vw #FA1C16, 0vw 0vw .4vw #FED128, .5vw .5vw .1vw #806914`,
      filter: 'saturate(60%)',
      background: '#CA4246',
      backgroundColor: '#CA4246',
    },
    '& .MuiCardHeader-subheader': {
      fontFamily: 'Bebas Neue',
      fontSize: '1.5vw',
      textShadow: '0vw 0vw 3vw #2356FF',
      // animation: `$glow 10s ease-in-out infinite`,
    },
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
