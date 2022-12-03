if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}
const session = require("express-session")
const passport = require("passport")


module.exports = function(app){
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: true,
            saveUninitialized: true,
            cookie: {secure:false},
            key: 'express.sid'
        })
    )
    app.use(passport.initialize())
    app.use(passport.session())
    require("./strategy")(passport)
}