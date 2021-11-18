import axios from "axios";
import { FAIL_USER ,LOAD_USER} from "JS/constants/user";
import { FAIL_ROOM, LOAD_ROOM ,GET_ALL_ROOMS, GET_ALL_SELLERS, GET_ALL_BUYERS, } from "../constants/admin";

//get all rooms for admin to accept or refuse
export const getRoomsAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ROOM });
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/admin/allRooms",config);
    dispatch({ type: GET_ALL_ROOMS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ROOM , payload: error.response.data.errors});
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
//get all sellers 
export const getSellers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/admin/allsellers",config);
    dispatch({ type: GET_ALL_SELLERS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER , payload: error.response.data.errors});
  }
};
//get all sellers 
export const getBuyers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/api/admin/allbuyers",config);
    dispatch({ type: GET_ALL_BUYERS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER , payload: error.response.data.errors});
  }
};
// delete Seller
export const deleteUser = (id) => async (dispatch) => {
   const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/admin/deleteUser/${id}`,config);
    dispatch(getBuyers());
    dispatch(getSellers());
  } catch (error) {
     dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
}