import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import Header from './Components/Header/Header';
import List from './Containers/List/List';
import Register from './Containers/Register/Register';

function Routes() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalReset />
        <Header />
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/register" component={Register} />
        </Switch>
        {/* <Footer /> */}
      </ThemeProvider>
    </Router>
  );
}

export default Routes;
