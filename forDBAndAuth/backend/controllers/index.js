const authControllers = require("./authControllers")
require("../db")


module.exports = {
    testUser: authControllers.testUser,
    saveTestUser: authControllers.saveTestUser,
    checkTestUser: authControllers.checkTestUser
}