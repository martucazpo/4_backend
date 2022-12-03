import { GET_INPUT, GET_USER } from "./types.js"


export const getInput = (input) =>{
    return {
        type: GET_INPUT,
        payload: input
    }
}

export const getUser = (user) =>{
    return {
        type: GET_USER,
        payload: user
    }
}