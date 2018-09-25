import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Nav from './nav/nav_container';

const App = ({ children }) => (
  <div>
      <Nav/>
      <div>
        <Switch>
          {/* <Route path="/" component={ Nav } /> */}
        </Switch>
      </div>
  </div>
);

export default App;