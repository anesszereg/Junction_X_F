// Routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Dashboard from '../Pages/Student/Dashboard';
import Quise from '../Pages/Student/Quise';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/Quise" component={Quise} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default Routes;
