// App.js

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './Layout/Defaultlayout';
import Routes from './Routes/Routes';
import KidsDashboard from './Pages/Student/Kids/KidsDashboard';
import TeacherDashboard from  './Pages/dashboard-teacher/TeacherDashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/AdultsDashboard/:section" component={DefaultLayout} />
          <Route path="/KidsDashboard" component={KidsDashboard} />
          <Route path="/TeacherDashboard" component={TeacherDashboard} />
          <Route path="/" component={Routes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
