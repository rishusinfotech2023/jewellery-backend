const express=require('express');
const Router=express.Router();

const user = require('../controller/user');

Router.post('/signup',user.signup);
Router.post('/login',user.login);



module.exports = Router;




