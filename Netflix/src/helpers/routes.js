import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export function IsUserRedirect({
  user, loggedInPath, children, ...rest
}) {
  return (
    !user ? <Outlet /> : <Navigate to={loggedInPath} />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    user ? <Outlet /> : <Navigate to="/signin" />
  );
}
