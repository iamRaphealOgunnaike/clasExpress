const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('bodyParser');
const mongoose  = require('mongoose');
const path = require('path');//forcefuly seeing config.env




dotenv.config({path: 'config.env'})
let PORT = process.env.PORT|| 2000



app.get("/" ,(req, res) => {
    res.send('sail crd app')
})


app.listen(PORT,() =>{ 
    console.log(`your app is currently availilable in ${PORT}`);//note: POrt should pick PORT in config.env and not 2000
});
