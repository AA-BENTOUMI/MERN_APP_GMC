import axios from "axios";
import {ADD_ROOM, FAIL_ROOM, LOAD_ROOM ,GET_ALL_ROOMS} from "../constants/room";

export const addRoom = (formData,) => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });

  try {
    const result = await axios.post("/api/room/addroom", formData);

    dispatch({ type: ADD_ROOM, payload: result.data }); //msg , token , user
  } catch (error) {
    dispatch({ type: FAIL_ROOM , payload: error.response.data.errors });
  }
};
export const getRooms = () => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
  try {
    let result = await axios.get("/api/room/rooms");
    dispatch({ type: GET_ALL_ROOMS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ROOM });
  }
};