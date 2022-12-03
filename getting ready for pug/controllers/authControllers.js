const User = require("../db/models").User
const passport = require("passport")

module.exports = {
    registerUser: (req, res) => {
        let { firstName, lastName, email, password } = req.body
        User.findOne({ email }, (err, data) => {
            if (err) {
                console.log(err)
            } else if (!data) {
                let newUser = new User({ firstName, lastName, email, password, isAuth: true })
                newUser.save((err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        return res.json(data)
                    }
                })
            } else {
                return res.json({ message: `${email} is already registered in our database.` })
            }
        })
    },
    loginUser: (req, res, next) => {
        passport.authenticate("local", (error, user, info) => {
            if (error) {
                console.log("Failed login:", error);
                info = { message: "Failed Login" }
                return res.json(info);
            }
            if (user === false) {
                info = { message: "password or email do not match database" }
                return res.json(info);
            } else {
                User.findByIdAndUpdate({ _id: user._id }, { $set: { isAuth: true } }, { new: true }, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        let { firstName, lastName, email, _id, timestamps, isAuth } = data
                        res.json({ firstName, lastName, email, _id, timestamps, isAuth })
                    }
                })
            }
        })(req, res, next);

    },
    logoutUser: (req, res) => {
        let { _id } = req.body
        req.logout(() => {
            User.findByIdAndUpdate({ _id }, { $set: { isAuth: false } }, { new: true }, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    return res.json({ message: "You are logged out!" })
                }
            })
        })

    }
}