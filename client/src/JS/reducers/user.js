import { FAIL_USER, LOAD_USER, LOGIN_USER, REGISTER_USER } from "../constants/user"


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
            localStorage.setItem("token", payload.token);
        case LOGIN_USER:
            return{...state,isLoad:false,user:payload.user,isAuth:true }
            localStorage.setItem("token", payload.token);
        case FAIL_USER:
            return{...state,errors:payload.errors,isLoad:false}
       
        default:
            return state
    }
}
export default userReducer