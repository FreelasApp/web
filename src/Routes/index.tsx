import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
    </Switch>
  );
};

export default AuthRoutes;
