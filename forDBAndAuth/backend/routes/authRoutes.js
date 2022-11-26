const router = require("express").Router()
const controllers = require("../controllers")

router.route("/")
.get(controllers.testUser)

router.route("/register")
.post(controllers.saveTestUser)

router.route("/login")
.post(controllers.checkTestUser)


module.exports = router