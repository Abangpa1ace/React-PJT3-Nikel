import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import Header from './Components/Header/Header';
import Main from './Containers/Main/Main';
import List from './Containers/List/List';
import Detail from './Containers/Detail/Detail';
import Register from './Containers/Register/Register';

function Routes() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalReset />
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/list" component={List} />
          <Route path="/detail" component={Detail} />
          <Route exact path="/register" component={Register} />
        </Switch>
        {/* <Footer /> */}
      </ThemeProvider>
    </Router>
  );
}

export default Routes;
