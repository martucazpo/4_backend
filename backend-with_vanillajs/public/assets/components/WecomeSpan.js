import store from "../utils/redux/store.js"


const WelcomeSpan = () =>{
    let user = store.getState().app.user
    let welcomeSpan = document.createElement("span")
    welcomeSpan.classList.add("welcome-span")
    let h3 = document.createElement("h3")
    h3.innerText = `Welcome ${user.firstName}, here is your card!`
    welcomeSpan.append(h3)
    return welcomeSpan
}

export default WelcomeSpan