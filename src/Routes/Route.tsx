import React from 'react';
import {
  Route as RouteDOM,
  RouteProps as RoutePropsDOM,
  Redirect,
} from 'react-router-dom';
import { useAuthContext } from '../Hooks/AuthContext';

interface RouteProps extends RoutePropsDOM {
  isPrivate?: boolean;
  component: React.ComponentType;
}
const AuthRoutes: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuthContext();

  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { location },
            }}
          />
        );
      }}
    />
  );
};

export default AuthRoutes;
