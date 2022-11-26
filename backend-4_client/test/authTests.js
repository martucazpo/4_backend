const chai = require('chai')
const assert = chai.assert
const server = require("../../index")
const bcrypt = require("bcryptjs")
const chaiHttp = require('chai-http')
chai.use(chaiHttp)


//suite("register a User", ()=>{
    // let user1 = {
    //     firstName: "Test",
    //     lastName: "One",
    //     email: "test1E@mail.com",
    //     password: bcrypt.hashSync("password", 10),
    // }

    // test("should be able to register a user", (done)=>{
    //     chai.request(server)
    //     .post("/auth/register")
    //     .send(user1)
    //     .end((err, res)=>{
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         assert.isString(res.body.firstName)
    //         assert.isString(res.body._id)
    //         done()
    //     })
    // })

    // test("Should get a message if email already in use", (done)=>{
    //     chai.request(server)
    //     .post("/auth/register")
    //     .send(user1)
    //     .end((err, res)=>{
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.message, "test1E@mail.com is already registered in our database.")
    //         done()
    //     })
    // })
//})

// suite("login a user", ()=>{
//     let loginUser = {
//         email: "test1E@mail.com",
//         password: "password",
//     }
//     let wrongPass = {
//         email: "test1E@mail.com",
//         password: "catsstink",
//     }
//     let wrongEmail = {
//         email: "testY@mail.com",
//         password: "password",
//     }
//     test("should be able to log in a user", (done)=>{
//         chai.request(server)
//         .post("/auth/login")
//         .send(loginUser)
//         .end((err, res)=>{
//             assert.equal(res.status, 200)
//             assert.isNotEmpty(res.body.firstName)
//             assert.isNotEmpty(res.body.lastName)
//             assert.isNotEmpty(res.body.email)
//             assert.isNotEmpty(res.body._id)
//             done()
//         })
//     })
//     test("should get an error - wrong password", (done)=>{
//         chai.request(server)
//         .post("/auth/login")
//         .send(wrongPass)
//         .end((err, res)=>{
//             assert.equal(res.status, 200)
//             assert.equal(res.body.message, "password or email do not match database")
//             done()
//         })
//     })
//     test("should get an error - wrong email", (done)=>{
//         chai.request(server)
//         .post("/auth/login")
//         .send(wrongEmail)
//         .end((err, res)=>{
//             assert.equal(res.status, 200)
//             assert.equal(res.body.message, "password or email do not match database")
//             done()
//         })
//     })
//  })