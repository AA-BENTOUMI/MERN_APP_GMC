/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../JS/actions/user";

// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const isAuth = useSelector(state => state.userReducer.isAuth)
    const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();
const handeleLougout=(e)=>{
  dispatch(logout())
}
  return (
    <>
      <nav style={{	height: "5.125rem"}} className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg bg-white shadow">
        <div style={{	height: "5.125rem"}}  className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Notus React
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {isAuth?<li className="flex items-center">
                 {user&&user.role=="admin"?<Link
              to="/admin/dashboard"
               className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}
                > Dashboard
              </Link>:null}
                <Link
              to="/myrooms"
               className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}
                > My Rooms
              </Link>
              {user&&user.role=="seller"?
              <Link
              to="/addroom"
               className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}
                > Add Room
              </Link>:null}
                <IndexDropdown />
              </li>:null}
              
                {isAuth?
                <li className="flex items-center">
                <Link to="/auth/login"
                style={{marginTop:"10%"}}
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handeleLougout}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Link></li>
                :<li className="flex items-center">
                <Link to="/auth/register"
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> register
                </Link>
                <Link to="/auth/login"
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-sign-out-alt"></i> Login
                </Link>
              </li>}
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}