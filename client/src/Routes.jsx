import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import theme from './Styles/theme';
import Header from './Components/Header';
import Main from './Pages/Main';
import List from './Pages/List';
import Detail from './Pages/Detail';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';

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
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default Routes;
