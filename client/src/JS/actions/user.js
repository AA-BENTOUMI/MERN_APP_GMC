import axios from "axios";
import { CLEAR_ERRORS, CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER,LOGOUT_USER,REGISTER_USER, UPDATE_USER } from "../constants/user";
// register
export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/register", newUser);

    dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
    history.push("/auth/login");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
//login
export const login = (user, history,) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
    history.push("/");
  } catch (error) {
    dispatch({ type: LOAD_USER, payload: error.response.data.errors });
  }
};
// current user
export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
//edit user informations 
export const editUser = (id, user,history) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result=await axios.put(`/api/user/profile/${id}`, user,config);
    dispatch({ type: UPDATE_USER, payload: result.data });
    dispatch(currentUser());
    // history.push("/profile");
  } catch (error) {
     dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
}
//logout 
export const logout=()=>{
  return{
    type:LOGOUT_USER
  }
}
//clear errors 
export const clearErrors=()=>{
  return{
    type:CLEAR_ERRORS
  }
}
// mail contact action
export const sendMail = (contact) => async (dispatch) => {
  try {
     await axios.post("/api/mail/send", contact);
  } catch (error) {
    dispatch({ error });
  }
};