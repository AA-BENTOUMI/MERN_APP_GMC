import { Route } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
const AdminRouter = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.user);

  if (user &&token && user.role === "admin") {
    return <Route component={Component} {...rest} />;
  }
  return null
};

export default AdminRouter;