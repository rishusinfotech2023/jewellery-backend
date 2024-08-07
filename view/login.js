const express=require('express');
const Router=express.Router();

const admin=require('../controller/admin')


Router.post('/adminsignup',admin.admin);
Router.post('/adminlogin',admin.adminlogin);


module.exports = Router;


