import React from 'react';
import {Route, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Routes = () => {

  return (
    <Switch>
      <Route path="/" exact component={Dashboard}></Route>
      <Route path="/profile" exact component={Profile}></Route>
    </Switch>
  )
}

export default Routes;