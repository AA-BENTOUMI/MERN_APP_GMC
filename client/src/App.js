import React, {useEffect } from "react";
// layouts
import { Switch, Route } from "react-router-dom";
import { currentUser } from "./JS/actions/user";
import { useDispatch } from "react-redux";
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Footer from "components/Footers/Footer.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/profile/Profile";
import Index from "views/Index.js";
import EditProfile from "views/profile/EditProfile";
import PrivateRoute from "router/PrivateRoute";
import Navbar from "components/Navbars/IndexNavbar";
import AddRoom from "views/rooms/AddRoom";
import RoomsList from "views/rooms/RoomsList";
import SellerRoute from "router/SellerRoute";
import AdminRouter from "router/AdminRouter";
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
  }, [dispatch, token]);
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      {/* add routes with layouts */}
      <AdminRouter path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <PrivateRoute path="/landing"  component={Landing} />
      <PrivateRoute path="/profile"  component={Profile} />
      <PrivateRoute path="/editprofile/:id" component={EditProfile} />
      <SellerRoute path="/addroom"  component={AddRoom} />
      <PrivateRoute path="/myrooms"  component={RoomsList} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
    </Switch>
      <Footer />
    </div>
  );
}

export default App;
