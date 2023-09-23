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
    path: "/about",
    element:  <PrivateRoute>
    <About />
  </PrivateRoute>,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <RouterProvider router={router} />

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
