import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {publicrequest} from "../requestmethods"




export const login = async (dispatch,user)=>{
dispatch(loginStart());
try{
const res = await publicrequest.post("/auth/login", user)
console.log(res)
dispatch(loginSuccess(res.data)); 
}catch(err){
    alert("something went wrong");
    
    dispatch(loginFailure())
    return err
}
}