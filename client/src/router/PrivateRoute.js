import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
const isAuth = useSelector(state => state.userReducer.isAuth)
  if (token&&isAuth) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/auth/login" />;
};

export default PrivateRoute;