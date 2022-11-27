import { GET_INPUT, LOGGEDIN_USER, REGISTERED_USER, SEND_MESSAGE, OPEN_MODAL, CLOSE_MODAL, LOGIN_FORM, REGISTRATION_FORM, GET_USER, LOGOUT_AUTH, LOGOUT_APP } from "./types.js"

export const getInput = (input) =>{
    return {
        type: GET_INPUT,
        payload: input
    }
}

export const registeredUser = (user) =>{
    return {
        type:REGISTERED_USER,
        payload: user
    }
}

export const loggedinUser = (user) =>{
    return {
        type: LOGGEDIN_USER,
        payload: user
    }
}

export const sendMessage = (message) =>{
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}

export const openModal = () =>{
    return {
        type: OPEN_MODAL
    }
}

export const closeModal = () =>{
    return {
        type: CLOSE_MODAL
    }
}

export const showRegistrationForm = () =>{
    return {
        type: REGISTRATION_FORM
    }
}

export const showLoginForm = () =>{
    return {
        type: LOGIN_FORM
    }
}

export const getUser = (user) =>{
    return {
        type: GET_USER,
        payload: user
    }
}

export const logoutAuth = () =>{
    return {
        type: LOGOUT_AUTH
    }
}

export const logoutApp = () =>{
    return {
        type: LOGOUT_APP
    }
}

