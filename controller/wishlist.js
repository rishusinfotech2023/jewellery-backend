const WishList = require('../module/Wishlist')
const jwt = require('../controller/jwt');

exports.getWishlist = async (req, res) =>{
   
    try {
        const items = await WishList.find()
        res.json({items})
    } catch (error) {
        return res.status(500).json({ message : "Failed to fetch wishlist"})
    }

}

exports.addToWishlist = async (req,res) =>{
  
    const { name , price , discount , product_id , upload} = req.body;
    const newItem = new WishList({name , price , discount , product_id ,upload});

     try {
       await newItem.save()
       res.status(200).json({message : "successfuly add to wishlist", item : newItem })
       
     } catch (error) {
       res.status(500).json({ error: 'Failed to add item to wishlist' });
     }

}





