import { FAIL_USER, LOAD_USER, LOGIN_USER, REGISTER_USER ,CURRENT_USER} from "../constants/user"


const initialState={
    user:null,
    errors:null,
    isLoad:false,
    isAuth:false
}
const userReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_USER:
            return{...state,isLoad:true}
        case REGISTER_USER:
            return{...state,isLoad:false,user:payload.user,isAuth:true }
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return{...state,isLoad:false,user:payload.user,isAuth:true }
        case FAIL_USER:
            return{...state,errors:payload.errors,isLoad:false}
       case CURRENT_USER:return {...state,loadUser: false, user: payload.user, isAuth: true,errors: [],};
        default:
            return state
    }
}
export default userReducer