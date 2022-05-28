import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';

import { ClientState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === ClientState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="space-around" style={{ height: '100vh'}}>
          <Grid item xs={12} sm={3} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.last}>
            <Details title="Expense" />
          </Grid>
      </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
    </div>
  );
};

export default App;