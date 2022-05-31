import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  '@keyframes animate': {
    from:{
      textShadow: `0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
        0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de`,
    },
    to:{
      textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de,
        0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de`,
    }
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
  '@keyframes flux': {
    "0%": {
      textShadow: `0vw 0vw 1vw #1041FF, 0vw 0vw 3vw #1041FF, 0vw 0vw 10vw #1041FF, 0vw 0vw 10vw #1041FF, 0vw 0vw .4vw #8BFDFE, .5vw .5vw .1vw #147280`,
      color: "#28D7FE",
    },
    "100%": {
      textShadow: `0vw 0vw 1vw #1041FF, 0vw 0vw 3vw #1041FF, 0vw 0vw 10vw #1041FF, 0vw 0vw 10vw #1041FF, 0vw 0vw .4vw #8BFDFE, .5vw .5vw .1vw #147280`,
      color: "#28D7FE",
    },
    "50%": {
      textShadow: `0vw 0vw .5vw #082180, 0vw 0vw 1.5vw #082180, 0vw 0vw 5vw #082180, 0vw 0vw 5vw #082180, 0vw 0vw .2vw #082180, .5vw .5vw .1vw #0A3940`,
      color: "#146C80",
    }
  },
  '@keyframes flicker': {
    "50%": {
      color: 'white',
      filter: 'saturate(200%) hue-rotate(20deg)',
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardHeader: {
    //work with this
    // backgroundColor: 'grey',
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    boxShadow: "0 8px 40px -12px rgb(0 255 0 / 0.7);",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgb(0 255 0 / 0.7);"
    },
    textAlign: 'center',
    
    // animation: `$animate 1.5s ease-in-out infinite alternate`,
    '& .MuiCardHeader-title': {
      fontFamily: 'Bangers',
      fontSize: '3vw',
      // textShadow: '0 0 3vw #F40A35',    
      // color: '#FB4264',
      // animation: `$neon 1s ease infinite`,
      // --interval: '1s',
      color: 'tomato',
      textShadow: 
        `0 0 10px var(orangered),
        0 0 20px var(firebrick),
        0 0 40px var(maroon),
        0 0 80px var(darkred)`,
      // willChange: 'filter, color',
      filter: 'saturate(60%)',
      animation: `$flicker steps(100) 1s 1s infinite`,
    },
    '& .MuiCardHeader-subheader': {
      fontFamily: 'Bangers',
      fontSize: '2vw',
      // animation: `$flux 2s linear infinite`,
      textShadow: '0vw 0vw 3vw #2356FF',
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
