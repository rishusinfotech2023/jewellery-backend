const express = require('express');
const router = express.Router() ;

const wishListController = require('../controller/wishlist');

router.get('/getwishlist', wishListController.getWishlist)
router.post('/addwishlist', wishListController.addToWishlist)
router.delete('/deletewishlist/:id', wishListController.deleteWishlist)


module.exports = router ;









