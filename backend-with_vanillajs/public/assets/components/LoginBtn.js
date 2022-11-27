import store from "../utils/redux/store.js"
import { handleModalOpen } from "../functions/handle.js"


const LoginBtn = () =>{
    let modalOpen = store.getState().auth.modalOpen
    const loginBtn = document.createElement("button")
    loginBtn.classList.add("the-login-btn")
    loginBtn.innerText = "LOG IN"
    if(!modalOpen){
        loginBtn.addEventListener("click", handleModalOpen)
    } else {
        loginBtn.removeEventListener("click", handleModalOpen)
    } 
    return loginBtn  
}

export default LoginBtn