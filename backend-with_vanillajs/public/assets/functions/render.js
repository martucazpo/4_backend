import LoginModal from "../components/LoginModal.js"
import Header from "../components/Header.js"
import Card from "../components/Card.js"
import store from "../utils/redux/store.js"
import API from "../utils/api/API.js"


export const render = async () => {
    const modalOpen = store.getState().auth.modalOpen
    const authState = store.getState().auth.isAuth
    const mainDiv = document.getElementById("mainDiv")
    mainDiv.innerHTML = ""
    mainDiv.classList.add("main-div")
    if (!authState && modalOpen) {
        mainDiv.append(Header())
        mainDiv.append(LoginModal())
        const inputs = [...document.querySelectorAll("input")]
        inputs.forEach(input => input.value = store.getState()[input.attributes.data.value][input.name])
    } else if(!authState && !modalOpen){
        mainDiv.append(Header())
    }else {
        let authToken = store.getState().auth.authToken
        await API.getDbUser(authToken)
        mainDiv.append(Header())
        mainDiv.append(Card())
    }

}

