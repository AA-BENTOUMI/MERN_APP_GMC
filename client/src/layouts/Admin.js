import React from "react";
import { Switch,  Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import AdminRouter from "router/AdminRouter";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full ">
          <Switch>
            <AdminRouter path="/admin/dashboard" exact component={Dashboard} />
            <AdminRouter path="/admin/settings" exact component={Settings} />
            <AdminRouter path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
