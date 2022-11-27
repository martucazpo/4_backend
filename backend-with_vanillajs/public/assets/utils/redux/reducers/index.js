import appReducer from "./appReducer.js"
import authReducer from "./authReducer.js"

const rootReducer = Redux.combineReducers({ app: appReducer, auth: authReducer })


export default rootReducer