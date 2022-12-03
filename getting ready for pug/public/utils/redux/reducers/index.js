import authReducer from "./authReducer.js"
import appReducer from "./appReducer.js"


const rootReducer = Redux.combineReducers({ auth: authReducer, app: appReducer})

export default rootReducer