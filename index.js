const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-Parser');
const mongoose  = require('mongoose');
const path = require('path');//forcefuly seeing config.en
const connectBD = require('./server/db/connection')
const morgan = require('morgan');





dotenv.config({path: 'config.env'})
let PORT = process.env.PORT|| 2000
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.use('/css', express.static(path.resolve(__dirname,'assets/css/register.css')))
app.use('/img', express.static(path.resolve(__dirname,'assets/img')))
app.use('/js', express.static(path.resolve(__dirname,'assets/js')))


// re.render('render')
app.get("/" ,(req, res) => {
    res.render('index')
})
app.get("/register" ,(req, res) => {
    res.render('register')
})

app.use('/', require('./server/routes'))/// connection of the route

app.listen(PORT,() =>{ 
    console.log(`your app is currently availilable in ${PORT}`);
});  //note: POrt should pick PORT in config.env and not 2000

