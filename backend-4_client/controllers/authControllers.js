const User = require("../db/models").User
const passport = require("passport")


module.exports = {
    testUser: (req, res) => {
        res.json({ user: "test user" })
    },
    saveTestUser: (req, res) => {
        let { firstName, lastName, email, password } = req.body
        User.findOne({ email }, (err, data) => {
            if (err) {
                console.log(err)
            } else if (!data) {
                let newUser = new User({ firstName, lastName, email, password })
                newUser.save((err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        return res.json(data)
                    }
                })
            } else {
                return res.json({message : `${ email } is already registered in our database.`})
            }
        })

    },
    checkTestUser: (req, res, next ) => {
        passport.authenticate("local", (error, user, info) => {
            if (error) {
                console.log("Failed login:", error);
                info = { message: "Failed Login" }
                res.json(info);
            }
            if (user === false) {
                info = { message: "password or email do not match database" }
                res.json(info);
            } else {
                User.findById({ _id: user._id }, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        let { firstName, lastName, email, _id, timestamps } = data
                        res.json({ firstName, lastName, email, _id, timestamps })
                    }
                })
            }
        })(req, res, next);

    }
}