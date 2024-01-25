import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import AddProject from './components/AddProject';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import UserDetail from './components/admin/UserDetail';

const AdminRoutes=[
  {
    path: "/admin/login",
    element: <Login/>,
  },

  {
    path: "/admin/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/admin/dashboard/user/:id",
    element: <UserDetail/>,
  },

]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/home",
    element:  <PrivateRoute>
    <Home />
  </PrivateRoute>,
  },

  {
    path: "/addProject",
    element:  <PrivateRoute>
    <AddProject />
  </PrivateRoute>,
  },
  {
    path: "/logout",
    element:  <PrivateRoute>
    <Logout />
  </PrivateRoute>,
  },
  {
    path: "/about",
    element:  <PrivateRoute>
    <About />
  </PrivateRoute>,
  },



...AdminRoutes
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <RouterProvider router={router} />

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
