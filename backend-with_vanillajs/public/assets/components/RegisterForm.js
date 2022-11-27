
import Form from "./Form.js"
import RegLogBtn from "./RegLogBtn.js"
import store from "../utils/redux/store.js"

const RegisterForm = (props) => {
    let regDiv = document.createElement("div")
    regDiv.classList.add("log-div")
    regDiv.append(Form(props))
    regDiv.append(RegLogBtn())
    const messageDiv = document.createElement("div")
    messageDiv.classList.add("message-div")
    regDiv.append(messageDiv)
    const h3 = document.createElement("h3")
    h3.innerText = store.getState().auth.authMessage
    messageDiv.append(h3)
    return regDiv
}

export default RegisterForm