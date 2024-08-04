const express = require('express');
const app = express();
const path = require('path');//pre installed
const bodyparser = require('body-parser');
const session = require('express-session');
const{v4:uuidv4} = require('uuid');
const ejs = require('ejs');
const router = require('./router');
require("./database");
const node = require("./models/node");
require('dotenv').config();


const port = process.env.PORT||8080;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));
app.use(session({
    secret: uuidv4(),
    resave:false,
    saveUninitialized:true
}));
app.get('/',(req,res)=>{
    res.render('base',{title:"ERP Portal"});
});
app.use('/route',router);
app.listen(port,()=>{console.log("http://localhost:8080")});