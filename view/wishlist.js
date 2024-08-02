const express = require('express');
const router = express.Router() ;

const wishListController = require('../controller/wishlist');

router.get('/getwishlist', wishListController.getWishlist)
router.post('/addwishlist', wishListController.addToWishlist)


module.exports = router ;









