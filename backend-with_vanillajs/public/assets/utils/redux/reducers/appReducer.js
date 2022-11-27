import { GET_INPUT, GET_USER, LOGOUT_APP } from "../types.js"

let initialState = {
    user: {}
}

const appReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_APP:
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}

export default appReducer