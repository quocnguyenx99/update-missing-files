import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home, Browse, Signin, Signup
} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App () {
  const user = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />}>
          <Route
            exact
            path={ROUTES.SIGN_IN}
            element={<Signin />}
          />
        </Route>

        <Route element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />}>
          <Route
            exact
            path={ROUTES.SIGN_UP}
            element={<Signup />}
          />
        </Route>

        <Route element={<ProtectedRoute user={user} />}>
          <Route
            exact
            path={ROUTES.BROWSE}
            element={<Browse />}
          />
        </Route>

        <Route element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />}>
          <Route
            exact
            path={ROUTES.HOME}
            element={<Home />}
          />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
