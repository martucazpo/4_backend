import LoginForm from "./LoginForm.js"
import RegisterForm from "./RegisterForm.js"
import store from "../utils/redux/store.js"
import { handleModalClose } from "../functions/handle.js"
import { loginFormProps, regFormProps } from "../js/props.js"

const LoginModal = () =>{
    const login = store.getState().auth.login
    const modal = document.createElement("div")
    modal.classList.add("modal")
    const modalBtn = document.createElement("button")
    modalBtn.classList.add("close-modal-btn")
    modalBtn.addEventListener("click", handleModalClose)
    modalBtn.innerText = "CLOSE"
    modal.append(modalBtn)
    if(login){
        modal.append(LoginForm(loginFormProps))
    } else {
        modal.append(RegisterForm(regFormProps))
    }
    return modal
}

export default LoginModal