
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Drawer from './Drawer';
import LandingPage from '../../Pages/LandingPage';
import SignUp from '../../Pages/Auth/SignUp';
import Login from '../../Pages/Auth/Login';


const DefaultLayout = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Drawer />

        <div className="content">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/login" component={Login} />
            
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default DefaultLayout;