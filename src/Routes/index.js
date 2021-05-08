import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Sidebar from '../Components/Sidebar';

const Routes = () => {

  return (
    <Switch>
      <Route path="/login" exact component={Login}></Route>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        <Sidebar />
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/profile" exact component={Profile}></Route>
      </div>
    </Switch>
  )
}

export default Routes;