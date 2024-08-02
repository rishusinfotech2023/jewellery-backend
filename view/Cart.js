
const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart');

router.get('/', cartController.getCart);
router.post('/addcart', cartController.addToCart);
router.delete('/deletecart/:id', cartController.DeleteCart);


module.exports = router;



