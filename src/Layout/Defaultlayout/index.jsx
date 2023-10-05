import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Drawer from './Drawer';
import LandingPage from '../../Pages/LandingPage';
import SignUp from '../../Pages/Auth/SignUp';
import Login from '../../Pages/Auth/Login';
import {Box} from '@mui/material';
import Dashboard from '../../Pages/Student/Dashboard';


const DefaultLayout = () => {
    return (
        <Router>
            <div className="app">
                <Box display='flex' position={'absolute'} width={'100%'}>

                    <Drawer/>
                    <Navbar/>
                </Box>

                <Box padding={'186px 157px '}>
                    <Switch>
                        <Route exact path="/"
                            component={LandingPage}/>
                        <Route exact path="/Dashboard"
                            component={Dashboard}/>
                        <Route path="/signUp"
                            component={SignUp}/>
                        <Route path="/login"
                            component={Login}/>

                    </Switch>
                </Box>
            </div>
        </Router>
    );
};

export default DefaultLayout;
