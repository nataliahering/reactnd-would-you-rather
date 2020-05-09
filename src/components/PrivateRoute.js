import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({component: Component, ...rest}) {
  const isLoggedIn = useSelector(state => state.authedUser !== null);
  return (
    <Route {...rest} render={props => (
      isLoggedIn ?
            <Component {...props} />
        : <Redirect to='/signin' />
    )} />
  );
}