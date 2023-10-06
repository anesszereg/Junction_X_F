// DefaultLayout.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Drawer from './Drawer';
import LandingPage from '../../Pages/LandingPage';
import SignUp from '../../Pages/Auth/SignUp';
import Login from '../../Pages/Auth/Login';
import { Box } from '@mui/material';
import Dashboard from '../../Pages/Student/Dashboard';

const sections = {
  Home: Dashboard,
  signUp: SignUp,
  login: Login,
};

const DefaultLayout = () => {

  const { section } = useParams();
  const ContentComponent = sections[section] || LandingPage;

  return (
    <Router>
      <div className="app">
        <Box display="flex" position="absolute" width="100%">
          <Drawer />
          <Navbar />
        </Box>


        <Box padding="136px 137px" overflow="hidden">
          <ContentComponent />
        </Box>
      </div>
    </Router>
  );
};

export default DefaultLayout;
