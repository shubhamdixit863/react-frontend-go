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
    element: <Home/>,
  },

  {
    path: "/addProject",
    element: <AddProject/>,
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
