import { getInput } from "../utils/redux/actions.js"
import store from "../utils/redux/store.js"


const Input = (props) =>{
    const inputSpan = document.createElement("span")
    inputSpan.classList.add("input-span")
    const label = document.createElement("label")
    label.setAttribute("htmlFor", props.name)
    label.innerText = props.labelTxt
    inputSpan.append(label)
    const textInput = document.createElement("input")
    textInput.setAttribute("name", props.name)
    textInput.setAttribute("type", "text")
    textInput.setAttribute("data", props.state)
    textInput.value = store.getState()[props.state][props.name]
    textInput.addEventListener("input", ()=>store.dispatch(getInput(textInput)))
    textInput.required = true
    inputSpan.append(textInput)
    return inputSpan
}

export default Input
