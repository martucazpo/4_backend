const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./backend/routes")
const auth = require("./backend/auth")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//comment oot if no login
auth(app)
app.use(routes)


app.listen(8000, ()=>console.log("Tiny ears listen on port 8000...."))

module.exports = app
