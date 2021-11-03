import { ADD_ROOM,LOAD_ROOM,FAIL_ROOM} from "../constants/room"


const initialState={
    room:null,
    errors:null,
    isLoad:false,
}
const roomReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_ROOM:
            return{...state,isLoad:true}
        case ADD_ROOM:
            return{...state,isLoad:false,room:payload.room }
        case FAIL_ROOM:
            return{...state,errors:payload.errors,isLoad:false}
      
        default:
            return state
    }
}
export default roomReducer