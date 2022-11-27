const User = require("../db/models").User

module.exports = {
    uponLanding: (req, res)=>{
        res.sendFile(process.cwd() + "/public/index.html")
    },
    getUser: (req, res)=>{
        let { _id } = req.params
        User.findById({_id}, (err, data) =>{
            if(err){
                console.log(err)
            } else {
                let { firstName, lastName, email, _id } = data
                return res.json({ firstName, lastName, email, _id })
            }
        })
    }
}