// App.js


import './App.css';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Routes from './Routes/Routes';
// import KidsDashboard from './Pages/Student/Kids/KidsDashboard';
// import TeacherDashboard from './Pages/dashboard-teacher/TeacherDashboard'
// import DefaultLayout from './Layout/Defaultlayout/index'
// import Welcome from './Pages/Welcome/Welcome';
import LandingPage from './Pages/LandingPage';


function App() {
    return (
        <div className="App">

{/* 
            <Router>
                <Switch>
                    <Route path="/AdultsDashboard/:section"
                        component={DefaultLayout}/>
                    <Route path="/KidsDashboard"
                        component={KidsDashboard}/>
                    <Route path="/TeacherDashboard"
                        component={TeacherDashboard}/>
                 
                    <Route path="/"
                        component={Routes}/>
                </Switch>
            </Router> */}
            <LandingPage/>

        </div>
    );
}

export default App;
