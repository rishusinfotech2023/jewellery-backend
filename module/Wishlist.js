const mongoose = require('mongoose');

const addToWishList = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    gross_weight : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    },
    product_id : {
        type : String,
        require : true
    },
    discount : { 
        type : String,
        require : true
    },
    upload: [
        {
            client_id: {
                type: String,
                require: true
            },
            url: {
                type: String,
                require: true
            }
        }
    ]
})

module.exports = mongoose.model("wishlist", addToWishList)

