import store from "../utils/redux/store.js"


const Card = () =>{
    let user = store.getState().app.user
    const card = document.createElement('div')
    card.classList.add("card")
    const cardHeader = document.createElement("header")
    cardHeader.classList.add("card-header")
    let h3 = document.createElement('h3')
    h3.innerText = `${user.firstName} ${user.lastName}`
    cardHeader.append(h3)
    card.append(cardHeader)
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    const bodyh3 = document.createElement("h3")
    bodyh3.innerText = `${user.email}`
    cardBody.append(bodyh3)
    card.append(cardBody)
    return card
}


export default Card