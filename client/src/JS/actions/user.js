import axios from "axios";
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER,REGISTER_USER } from "../constants/user";

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
export const login = (user, history,) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
    history.push("/");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
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
export const editUser = (id, user) => async (dispatch) => {
  try {
    await axios.put(`/api/user/profile/${id}`, user);
    // dispatch({ type: CURRENT_USER});
    // history.push("/profile");
  } catch (error) {
     dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
}