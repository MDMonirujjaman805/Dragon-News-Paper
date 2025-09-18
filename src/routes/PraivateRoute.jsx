import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PraivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation()
  // console.log(location );
  if(loading){
    return <Loading/>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"} />;
};

export default PraivateRoute;
