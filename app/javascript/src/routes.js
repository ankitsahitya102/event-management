import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from './shared/PrivateRoute'

import Dashboard from './Dashboard'

const Routes = () => {
  return (
    <Router basename="/dashboard">
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/events" component={Dashboard} />
        <PrivateRoute exact path="/users" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Routes;
