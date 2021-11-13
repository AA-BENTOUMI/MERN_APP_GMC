import axios from "axios";
import { FAIL_ROOM, LOAD_ROOM ,GET_ALL_ROOMS, } from "../constants/admin";

//get all rooms for admin to accept or refuse
export const getRoomsAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
  try {
    let result = await axios.get("/api/admin/allRooms");
    dispatch({ type: GET_ALL_ROOMS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ROOM });
  }
};
export const changeStatus = (id,{status,starting,addsum}) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/admin/changestatus/${id}`, {status,starting,addsum},config);
    dispatch(getRoomsAdmin())
  } catch (error) {
     dispatch({ type: FAIL_ROOM, payload: error.response.data.errors });
  }
}