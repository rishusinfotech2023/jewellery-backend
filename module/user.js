const mongoose = require('mongoose');
const {Schema} = mongoose;

let User = new Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    wishList : [{type : mongoose.Schema.Types.ObjectId , ref : "Product"}],
},{
    collection:"user"
});
module.exports=mongoose.model("user",User);


