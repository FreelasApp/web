import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Freela from '../pages/Freela';
import Profile from '../pages/Profile';
import PublicProfile from '../pages/PublicProfile';
import ProfileEdit from '../pages/ProfileEdit';
import CreateProject from '../pages/CreateProject';
import Route from './Route';

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/dashboard" exact isPrivate component={Dashboard} />
      <Route path="/freela/:id" exact isPrivate component={Freela} />
      <Route path="/profile" exact isPrivate component={Profile} />
      <Route
        path="/public/profile/:id"
        exact
        isPrivate
        component={PublicProfile}
      />
      <Route path="/profile/edit" exact isPrivate component={ProfileEdit} />
      <Route path="/create/project" exact isPrivate component={CreateProject} />
    </Switch>
  );
};

export default AuthRoutes;
