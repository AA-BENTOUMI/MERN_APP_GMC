import axios from "axios";
import { FAIL_ROOM, LOAD_ROOM ,GET_ALL_ROOMS, } from "../constants/admin";
export const getRoomsAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
  try {
    let result = await axios.get("/api/admin/allRooms");
    dispatch({ type: GET_ALL_ROOMS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ROOM });
  }
};