import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from './Pages/Auth/Login'
import DefaultLayout from './Layout/Defaultlayout/index'
import TeacherDashboard from "./Pages/dashboard-teacher/TeacherDashboard";
import KidsDashboard from "./Pages/Student/Kids/KidsDashboard";
import Gameone from "./Pages/Student/Kids/Gameone";
import Classesdashboard from "./Components/DashboardTeacher/ClassesDashboard/Classesdashboard";
import CourseDashboard from "./Components/DashboardTeacher/CourseDashboard/CourseDashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
  },
  {
    path:'/Login',
    element: <Login/>
  },
  {
    path:'/AdultDashboard',
    element:<DefaultLayout/>
  },
  {
    path:'/TeacherDashboard',
    element:<TeacherDashboard/>
  },
  {
    path:'/KidsDashboard',
    element:<KidsDashboard/>
  },
  {
    path:'/AdultDashboard/Gameone',
    element:<Gameone/>
  },
  {
    path:'/TeacherDashboard/classes',
    element:<Classesdashboard/>
  },
  {
    path:'/TeacherDashboard/course',
    element:<CourseDashboard/>
  },

 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
