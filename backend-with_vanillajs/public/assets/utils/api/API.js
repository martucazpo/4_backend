import store from "../redux/store.js"
import { registeredUser, sendMessage, loggedinUser, getUser, logoutApp, logoutAuth } from "../redux/actions.js"
import { registerURL, loginURL, getUserURL, logoutURL } from "./config.js"
import { getData, postData } from "./fetch.js"


const API = {
  registerUser: async (user) => {
    await postData(registerURL, user)
      .then((data) => {
        if (data.message) {
          return store.dispatch(sendMessage(data.message))
        } else {
          return store.dispatch(registeredUser(data));
        }
      });
  },
  loginUser: async (user) => {
    await postData(loginURL, user)
      .then((data) => {
        if (data.message) {
          return store.dispatch(sendMessage(data.message))
        } else {
          return store.dispatch(loggedinUser(data))
        }
      })
  },
  getDbUser: async (id) => {
    await getData(getUserURL + "/" + id)
      .then((data) => store.dispatch(getUser(data)))
  },
  logoutUser: async (user) => {
    await postData(logoutURL, user)
    .then((data)=>{
      store.dispatch(logoutAuth(data))
      store.dispatch(logoutApp(data))
      return
    })
  }
}

export default API

