const router = require('express').Router()
const authRoutes = require("./authRoutes")
const appRoutes = require("./appRoutes")

router.use("/", appRoutes)
router.use("/auth", authRoutes)

module.exports = router