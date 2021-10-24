import axios from "axios";
import { LOGIN_USER,REGISTER_USER } from "../constants/user";

export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/register", newUser);

    dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
    alert(result.data.msg);
    history.push("/");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
export const register = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/login", user);

    dispatch({ type: LOGIN_USER, payload: result.data }); //msg , token , user
    alert(result.data.msg);
    history.push("/");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};