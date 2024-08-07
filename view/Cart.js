const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart');
const multer = require('multer');
const upload = require('../middleware/upload')

//multer 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.jpg);
//     }
// });

// const upload = multer({ storage: storage });

router.get('/', cartController.getCart);
router.post('/addcart', cartController.addToCart); // upload.single('adpic1.jpg')
router.delete('/deletecart/:id', cartController.DeleteCart);


module.exports = router;



