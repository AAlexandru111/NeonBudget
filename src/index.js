import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { StyledEngineProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="b6ce2cd8-0dcb-48df-a239-1576af28eec5" language="en-US">
    <Provider>
    <StyledEngineProvider injectFirst>
    <CssBaseline />
      <App />
    </StyledEngineProvider>
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);