import React, {useEffect } from "react";
// layouts
import { Switch, Route } from "react-router-dom";
import { currentUser } from "./JS/actions/user";
import { useDispatch } from "react-redux";
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/profile/Profile";
import Index from "views/Index.js";
import EditProfile from "views/profile/EditProfile";
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
      <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing"  component={Landing} />
      <Route path="/profile"  component={Profile} />
      <Route path="/editprofile/:id" component={EditProfile} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
    </Switch>
    </div>
  );
}

export default App;
