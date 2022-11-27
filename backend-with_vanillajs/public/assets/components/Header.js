import store from "../utils/redux/store.js"
import LoginBtn from "./LoginBtn.js"
import LogoutBtn from "./LogoutBtn.js"
import WelcomeSpan from "./WecomeSpan.js"

const Header = () =>{
    let isAuth = store.getState().auth.isAuth
    const header = document.createElement("header")
    header.classList.add("main-header")
    const spacer = document.createElement("span")
    spacer.style.width = "50vw"
    if(!isAuth){
        header.append(spacer)
        header.append(LoginBtn())
    } else {
        header.append(WelcomeSpan())
        header.append(LogoutBtn())
    }
    return header
}

export default Header