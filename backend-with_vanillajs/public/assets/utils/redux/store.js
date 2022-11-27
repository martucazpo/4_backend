import rootReducer from "./reducers/index.js"


const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk))


export default store