import store from "../utils/redux/store.js"
import { handleShowReg, handleShowLog} from "../functions/handle.js"

const RegLogBtn = () =>{
    let login = store.getState().auth.login
    let regLoginDiv = document.createElement("div")
    regLoginDiv.innerHTML = ""
    regLoginDiv.classList.add("reg-log-btn-div")
    if(login){
        let regBtn = document.createElement("button")
        regBtn.innerText = "REGISTER"
        regBtn.addEventListener("click", handleShowReg)
        regLoginDiv.append(regBtn)
    } else {
        let logBtn = document.createElement("button")
        logBtn.innerText = "LOGIN"
        logBtn.addEventListener("click", handleShowLog)
        regLoginDiv.append(logBtn)
    }
    return regLoginDiv
}

export default RegLogBtn