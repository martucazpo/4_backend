import store from "../utils/redux/store.js"
import API from "../utils/api/API.js"
import { render } from "./render.js"
import { sendMessage } from "../utils/redux/actions.js"
const bcrypt = dcodeIO.bcrypt

export const regFormSubmit = async () =>{
    let { firstName, lastName, email, password1, password2 } = store.getState().auth
    if(password1 !== password2){
        store.dispatch(sendMessage("The passwords do not match"))
        render()
        return
    } else {
        let password = bcrypt.hashSync(password1, 10)
        await API.registerUser({ firstName, lastName, email, password })
        render()
        return
    }
}