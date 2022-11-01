import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();

  console.log(loading);
  if (loading) {
    return <div>Still loading............</div>;
  }
  if (user && user.uid) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
