import { LOAD_ROOM,FAIL_ROOM, GET_ALL_ROOMS, GET_ALL_SELLERS, GET_ALL_BUYERS, } from "../constants/admin"


const initialState={
    myrooms:[],
    rooms:null,
    sellers:null,
    buyers:null,
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
        case GET_ALL_SELLERS:
            return { ...state, sellers: payload.sellers, isLoad: false,errors: [],  };
            case GET_ALL_BUYERS:
            return { ...state, buyers: payload.buyers, isLoad: false,errors: [],  };
        default:
            return state
    }
}
export default adminReducer