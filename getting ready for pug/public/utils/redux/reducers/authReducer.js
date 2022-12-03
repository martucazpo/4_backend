import { GET_INPUT } from "../types.js"

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: "",
    password2: "",
    isAuth: false,
    login: true,
    modalOpen: false
}

const authReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_INPUT:
            let { name, value } = action.payload
        return {
            ...state,
            [name]: value
        }
        default:
            return state
    }
}

export default authReducer