import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  IndexPage,
  AdminPage,
  EventPage,
  SignInPage,
} from './pages';


function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>
            <Route exact path="/admin">
              <AdminPage />
            </Route>
            <Route exact path="/signin">
              <SignInPage />
            </Route>
            <Route path="/event/:id" component={EventPage}>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
