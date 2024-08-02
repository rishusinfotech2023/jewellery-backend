const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const config=require('./DB.js')
const cloudinary=require('cloudinary').v2;
const jwt = require('./controller/jwt.js')

dotenv.config();
const port=process.env.PORT||7000

const app=express();
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); 

const admin=require('./view/login')
const user = require('./view/User.js')
const jewellery=require('./view/jewller');
const payment=require('./view/payment');
const cart = require('./view/Cart');
const wishlist = require('./view/wishlist.js')

app.use('/admin',admin);
app.use('/user', user)
app.use('/jewellery',jewellery);
app.use('/payment',payment);
app.use('/cart', cart)
app.use('/wishlist', wishlist)

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET // Click 'View Credentials' below to copy your API secret
  });

mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
 console.log('Database is connected');   
}).catch((err)=>{
    console.error('Cannot connect to database'+err);
});



app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

module.exports=app;