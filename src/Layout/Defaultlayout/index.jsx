// DefaultLayout.js

import Navbar from './Navbar';
import Drawer from './Drawer';



import { Box } from '@mui/material';
import Dashboard from '../../Pages/Student/Dashboard';


const DefaultLayout = () => {


  return (

      <div className="app">
        <Box display="flex" position="absolute" width="100%">
          <Drawer />
          <Navbar />
        </Box>


        <Box padding="136px 137px" overflow="hidden">
          <Dashboard/>

        </Box>
      </div>

  );
};

export default DefaultLayout;
