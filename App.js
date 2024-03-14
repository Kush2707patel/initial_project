const express = require('express');
const app =express();
var bodyParser=require("body-parser");      
app.use(bodyParser.json());  // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//importing the routes from other files       
console.log(App.js);                  