import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from './shared/PrivateRoute'

import Dashboard from './Dashboard'
import Events from './components/events'
import Users from './components/users'
import AvailableSlots from './components/users/availableSlots'

const Routes = () => {
  return (
    <Router basename="/dashboard">
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/events" component={Events} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/users/:id/available_slots" component={AvailableSlots} />
      </Switch>
    </Router>
  );
}

export default Routes;
