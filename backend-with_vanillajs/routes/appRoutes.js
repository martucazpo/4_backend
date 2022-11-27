const router = require("express").Router()
const controllers = require("../controllers")

router.route("/")
.get(controllers.uponLanding)

router.route("/finduser/:_id")
.get(controllers.getUser)


module.exports = router