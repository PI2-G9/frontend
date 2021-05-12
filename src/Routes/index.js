import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import EditUser from '../pages/EditUser';
import RegisterUser from '../pages/RegisterUser';
import Sidebar from '../Components/Sidebar';

const Routes = () => {

  return (
    <Switch>
      <Route path="/login" exact component={Login}></Route>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        <Sidebar />
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/perfil" exact component={Profile}></Route>
        <Route path="/cadastro" exact component={RegisterUser}></Route>
        <Route path="/editar" exact component={EditUser}></Route>
      </div>
    </Switch>
  )
}

export default Routes;