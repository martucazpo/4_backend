import Form from "./Form.js"
import RegLogBtn from "./RegLogBtn.js"
import { loginFormProps } from "../js/props.js"
import store from "../utils/redux/store.js"


const LoginForm = () => {
    let logDiv = document.createElement("div")
    logDiv.classList.add("log-div")
    logDiv.append(Form(loginFormProps))
    logDiv.append(RegLogBtn())
    const messageDiv = document.createElement("div")
    messageDiv.classList.add("message-div")
    logDiv.append(messageDiv)
    const h3 = document.createElement("h3")
    h3.innerText = store.getState().auth.authMessage
    messageDiv.append(h3)
    return logDiv
}

export default LoginForm