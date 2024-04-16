import { commonAPI } from "./commonAPI"
import { base_Url } from "./base_URL"


//register user
export const registerapi = async(user)=>{
    return await commonAPI('POST',`${base_Url}/register/user`,"")
}

//login user
export const loginapi = async(user)=>{
    return await commonAPI('POST',`${base_Url}/login/user`,"")
}