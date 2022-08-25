const express = require('express');
const routes = express.Router();//Router is a method in the express.

routes.get("/" ,(req, res) => {
    res.render('index')
});
routes.get("/register" ,(req, res) => {
    res.render('register')
});


module.exports = routes;