import Input from "../components/Input.js"
import { regFormSubmit } from "../functions/regFormSubmit.js"
import { loginFormSubmit } from "../functions/loginFormSubmit.js"

export const regFormProps = {
    handleSubmit: regFormSubmit,
    subTxt: "REGISTER",
    input: Input,
    children: [
        {
            labelTxt: "First Name",
            name: "firstName",
            state: "auth"
        },
        {
            labelTxt: "Last Name",
            name: "lastName",
            state: "auth"
        },
        {
            labelTxt: "email",
            name: "email",
            state: "auth"
        },
        {
            labelTxt: "Password",
            name: "password1",
            state: "auth"
        },
        {
            labelTxt: "Please re-enter password",
            name: "password2",
            state: "auth"
        },
    ]
}

export const loginFormProps = {
    handleSubmit: loginFormSubmit,
    subTxt: "LOGIN",
    input: Input,
    children: [
        {
            labelTxt: "email",
            name: "email",
            state: "auth"
        },
        {
            labelTxt: "Password",
            name: "password",
            state: "auth"
        },
    ]
}