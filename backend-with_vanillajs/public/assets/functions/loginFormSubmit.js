import API from "../utils/api/API.js"
import store from "../utils/redux/store.js"
import { render } from "./render.js"


export const loginFormSubmit = async () =>{
    let { email, password } = store.getState().auth
    await API.loginUser({ email, password })
    render()
}