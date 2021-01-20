import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Freela from '../pages/Freela';
import Route from './Route';

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/dashboard" exact isPrivate component={Dashboard} />
      <Route path="/freela/:id" exact isPrivate component={Freela} />
    </Switch>
  );
};

export default AuthRoutes;
