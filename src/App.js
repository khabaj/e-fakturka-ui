import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';


class App extends Component {

  render() {
    const routes = (
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegistrationPage} />
        <Redirect to="/login" />
      </Switch>
    );

    return (
      <BrowserRouter>
        <Layout>
          {routes}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
