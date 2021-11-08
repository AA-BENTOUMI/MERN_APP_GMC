import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
const SellerRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.user);

  if (user &&token && user.role === "seller") {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/" />;
};

export default SellerRoute;