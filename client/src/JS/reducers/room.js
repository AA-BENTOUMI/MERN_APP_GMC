import { ADD_ROOM,LOAD_ROOM,FAIL_ROOM, GET_ALL_ROOMS, GET_MY_ROOMS, GET_ONE_ROOMS, UPDATE_DETAILS, CLEAR_ERRORS} from "../constants/room"


const initialState={
    oneroom:null,
    myrooms:[],
    rooms: [],
    room:null,
    errors:null,
    isLoad:false,
}
const roomReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_ROOM:
            return{...state,isLoad:true}
        case GET_ALL_ROOMS:
            return { ...state, rooms: payload, isLoad: false };
        case GET_MY_ROOMS:
            return { ...state, myrooms: payload, isLoad: false };
        case ADD_ROOM:
            return{...state,isLoad:false,room:payload.room }
        case GET_ONE_ROOMS:
            return { ...state, oneroom: payload, isLoad: false,errors: [], };
        case UPDATE_DETAILS:
            return { ...state, oneroom: payload, isLoad: false};
        case FAIL_ROOM:
            return{...state,errors:payload,isLoad:false}
        case CLEAR_ERRORS:
           return {...state,errors:null};
      
        default:
            return state
    }
}
export default roomReducer