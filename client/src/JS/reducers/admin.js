import { LOAD_ROOM,FAIL_ROOM, GET_ALL_ROOMS, } from "../constants/admin"


const initialState={
    myrooms:[],
    room:null,
    errors:null,
    isLoad:false,
}
const adminReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_ROOM:
            return{...state,isLoad:true}
        case GET_ALL_ROOMS:
            return { ...state, rooms: payload, isLoad: false };
        case FAIL_ROOM:
            return{...state,errors:payload.errors,isLoad:false}
      
        default:
            return state
    }
}
export default adminReducer