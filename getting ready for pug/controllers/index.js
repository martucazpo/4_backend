const authControllers = require("./authControllers")
const appControllers = require("./appControllers")
require("../db")

module.exports = {
    registerUser: authControllers.registerUser,
    loginUser: authControllers.loginUser,
    logoutUser: authControllers.logoutUser
}