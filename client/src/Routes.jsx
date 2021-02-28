import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';

function Routes() {
  return (
    <Router id="Routes">
      <ThemeProvider theme={theme}>
      <GlobalReset />
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component />
        </Switch>
        {/* <Footer /> */}
      </ThemeProvider>
    </Router>
  );
}

export default Routes;
