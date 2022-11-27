


const Form = (props) =>{
    const form = document.createElement("form")
    if(props.formClass){
        form.classList.add(props.formClass)
    }
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        props.handleSubmit()
    })
    props.children.forEach(child => form.append(props.input(child)))
    const subBtn = document.createElement("button")
    subBtn.innerText = props.subTxt
    form.append(subBtn)
    return form
}


export default Form