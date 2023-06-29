const express = require('express');
const Errorhandler = require('./middelware/Error');
const app = express()
const cookieparser = require('cookie-parser')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require("path")

app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials : true,
}))
app.use('/', express.static('images-user'))
app.use(bodyparser.urlencoded({extended: true, limit:'60mb'}))
app.use("/test", (req, res) => {
    res.send("Hello world!");
});

if(process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({
        path: 'config/.env'
    })
}

const user = require('./controller/user')
// const authroute = require('./auth')

app.use('/api/v2/user', user);
// app.use('/api', authroute)

app.use(Errorhandler);

module.exports = app;