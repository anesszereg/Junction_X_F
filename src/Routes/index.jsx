
import { RouteBase } from "../Constants/RouteUrl";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";





export const routes = [
    {
      path: RouteBase.landing,
      exact: true,
      name: "LandingPage",
      component: LandingPage,
      isPrivate: false,
    },
    {
      path: RouteBase.login,
      exact: true,
      name: "login",
      component: Login,
      isPrivate: false,
    },

    {
      path: RouteBase.signUp,
      exact: true,
      name: "signUp",
      component: SignUp,
      isPrivate: false,
    },

]