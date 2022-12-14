const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        default: "no firstname"
    },
    lastName:{
        type: String,
        required: true,
        default: "no lastname"
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }},
    {
        timestamps: true
    })

module.exports = mongoose.model("User", UserSchema)