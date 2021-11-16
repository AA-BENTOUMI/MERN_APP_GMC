import axios from "axios";
import {ADD_ROOM, FAIL_ROOM, LOAD_ROOM ,GET_ALL_ROOMS, GET_MY_ROOMS, GET_ONE_ROOMS, UPDATE_DETAILS, CLEAR_ERRORS} from "../constants/room";

//add new room
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
// get all rooms
export const getRooms = () => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
  try {
    let result = await axios.get("/api/room/rooms");
    dispatch({ type: GET_ALL_ROOMS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ROOM });
  }
};
// get seller rooms
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
//put id user in room
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
// get rooms for buyers
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
        dispatch({ type: FAIL_ROOM , payload: error.response.data.errors});
  }
};
//room start or no
export const startRoom = (id,room) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/room/startroom/${id}`, room,config);
  } catch (error) {
     dispatch({ type: FAIL_ROOM, payload: error.response.data.errors });
  }
}
//room additional details
export const Details = (id,{starting,last}) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result=await axios.put(`/api/room/details/${id}`, {starting,last},config);
    dispatch({ type: UPDATE_DETAILS, payload: result.data });
    // dispatch(oneRoom());
  } catch (error) {
     dispatch({ type: FAIL_ROOM, payload: error.response.data.errors });
  }
}
//room additional details
export const oneRoom = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get(`/api/room/room/${id}`, config);
    dispatch({ type: GET_ONE_ROOMS, payload: result.data });
  } catch (error) {
        dispatch({ type: FAIL_ROOM });
  }
};
//clear errors 
export const clearErrors=()=>{
  return{
    type:CLEAR_ERRORS
  }
}