import React, { Fragment, Suspense, lazy, useEffect } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import Profile from "./users_part/components/profile/Profile";
import { currentUser } from "./JS/actions/user";
import { useDispatch } from "react-redux";

const LoggedInComponent = lazy(() => import("./admin_part/components/Main"));

const LoggedOutComponent = lazy(() => import("./users_part/components/Main"));

function App() {
    const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
  }, [dispatch, token]);
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/c">
              <LoggedInComponent />
            </Route>
              <Route path="/profile" component={Profile} />
            <Route>
              <LoggedOutComponent />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
