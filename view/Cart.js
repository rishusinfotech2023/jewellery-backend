const express = require('express');

const router = express.Router();

const cart_Controller = require('../controller/cart')


router.post('/add-to-cart', cart_Controller)


module.exports = router ;

