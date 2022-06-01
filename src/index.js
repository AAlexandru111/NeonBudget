import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { StyledEngineProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Provider } from './context/context';
import App from './App';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: ["Bebas Neue", 'cursive'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Bebas Neue'],
      }
    }
  },
  component: {
    MuiTypography: {
      defaultProps: {
        "@font-face": {
          fontFamily: ["Bebas Neue", 'cursive'].join(','),
        },
      }
    }
  }
});

ReactDOM.render(
  <SpeechProvider appId="b6ce2cd8-0dcb-48df-a239-1576af28eec5" language="en-US">
    <Provider>
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
    </StyledEngineProvider>
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);