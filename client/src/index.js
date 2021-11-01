import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter, } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./JS/store/sotre";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
     <App />
  </Provider>,
  </BrowserRouter>,
  document.getElementById("root")
);
