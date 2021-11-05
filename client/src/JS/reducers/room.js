import { ADD_ROOM,LOAD_ROOM,FAIL_ROOM, GET_ALL_ROOMS, GET_MY_ROOMS} from "../constants/room"


const initialState={
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
        case FAIL_ROOM:
            return{...state,errors:payload.errors,isLoad:false}
      
        default:
            return state
    }
}
export default roomReducer