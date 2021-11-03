import axios from "axios";
import {ADD_ROOM, FAIL_ROOM, LOAD_ROOM } from "../constants/room";

export const addRoom = (formData,) => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });

  try {
    const result = await axios.post("/api/room/addroom", formData);

    dispatch({ type: ADD_ROOM, payload: result.data }); //msg , token , user
  } catch (error) {
    dispatch({ type: FAIL_ROOM , payload: error.response.data.errors });
  }
};