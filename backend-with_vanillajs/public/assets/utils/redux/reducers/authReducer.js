import { GET_INPUT, LOGGEDIN_USER, REGISTERED_USER, SEND_MESSAGE, OPEN_MODAL, CLOSE_MODAL, REGISTRATION_FORM, LOGIN_FORM, LOGOUT_AUTH } from "../types.js"

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: "",
    password2: "",
    authMessage: "",
    authToken: "",
    isAuth: false,
    login: true,
    modalOpen: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INPUT:
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case REGISTERED_USER:
            return {
                ...state,
                authMessage: "",
                firstName: "",
                lastName: "",
                email: "",
                password1: "",
                password2: "",
                authToken: action.payload._id,
                isAuth: action.payload.isAuth,
                login: true,
                modalOpen: false
            }
        case LOGGEDIN_USER:
            return {
                ...state,
                email: "",
                password: "",
                authMessage: "",
                isAuth: action.payload.isAuth,
                authToken: action.payload._id,
                login: true,
                modalOpen: false
            }
        case SEND_MESSAGE:
            return {
                ...state,
                authMessage: action.payload
            }
        case OPEN_MODAL:
            return {
                ...state,
                modalOpen: true,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                authMessage: "",
                authToken: "",
                isAuth: false,
                login: true,

            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                authMessage: "",
                authToken: "",
                login: true,
            }
        case REGISTRATION_FORM:
            return {
                ...state,
                login: false,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                authMessage: "",
            }
        case LOGIN_FORM:
            return {
                ...state,
                login: true,
                email: "",
                password: "",
                authMessage: "",
            }
        case LOGOUT_AUTH:
            return {
                ...state,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password1: "",
                password2: "",
                authMessage: "",
                authToken: "",
                isAuth: false,
                login: true,
                modalOpen: false
            }
        default:
            return state
    }
}

export default AuthReducer