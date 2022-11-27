const appControllers = require("./appControllers")
const authControllers = require("./authControllers")
require("../db")

module.exports = {
    uponLanding: appControllers.uponLanding,
    registerUser: authControllers.registerUser,
    loginUser: authControllers.loginUser,
    getUser: appControllers.getUser,
    logout: authControllers.logoutUser
}