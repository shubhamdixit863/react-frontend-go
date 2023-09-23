import { Navigate } from "react-router-dom";

const CheckAuth=()=>{
    // It will look into local storage and see if the token is there or not
    return localStorage.getItem("token")?true :false;
}

function PrivateRoute({ children }) {
  const auth = CheckAuth();
  return auth ? children : <Navigate to="/" />; // if the token is available then redirect to page otherwise redirect to signin page
}

export default PrivateRoute;