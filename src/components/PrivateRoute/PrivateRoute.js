import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import SessionContext from '../../context/SessionContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(SessionContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/'} />
        )
      }
    />
  );
};

export default PrivateRoute;
