const express = require('express');
const routes = express.Router();//Router is a method in the express.
const controller = require("../controller/controller")

routes.get("/" ,(req, res) => {
    res.render('index', {users: "New Sail"})
});


routes.get("/register" ,(req, res) => {
    res.render('register')
});






routes.post("/sail/users:id", controller.create)
module.exports = routes;