const mongoose = require('mongoose');

const addToCart = new mongoose.Schema({
    product_id : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    },
    user_id : {
        type : String,
        require :true
    },
    key_id : {
        type :String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    gross_weight : {
        type : String,
        require : true
    }
   

});

module.exports = mongoose.model("cart", addToCart)


