import axios from "axios";
import {ADD_ROOM, FAIL_ROOM, LOAD_ROOM ,GET_ALL_ROOMS, GET_MY_ROOMS} from "../constants/room";

export const addRoom = (formData,history) => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
 const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.post("/api/room/addroom", formData,config);
    history.push("/myrooms");

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
export const getMyRooms = () => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/room/myRooms", config);
    dispatch({ type: GET_MY_ROOMS, payload: result.data });
  } catch (error) {
        dispatch({ type: FAIL_ROOM });
  }
};
export const participate = (id,user) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/room/participate/${id}`, user,config);
  } catch (error) {
     dispatch({ type: FAIL_ROOM, payload: error.response.data.errors });
  }
}
export const getPartiRooms = () => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/room/myparticipaterooms", config);
    dispatch({ type: GET_MY_ROOMS, payload: result.data });
  } catch (error) {
        dispatch({ type: FAIL_ROOM });
  }
};