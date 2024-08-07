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

exports.deleteWishlist = async (req, res) =>{

    try {
        const {id }= req.params ;
        if(!id){
        return res.status(400).json({ message : "Wishlist id parameter is required"})
    }
    const product = await WishList.findById(id)
    console.log(product)
    if(!product){
        return res.status(404).json({ message : "Wishlist product not found"})  }
        await WishList.deleteOne( { _id : id })
        return res.status(200).json({ message : "Wishlist delete successfuly"})
  
        
    } catch (error) {
        return res.status(500).json({message : "wishlist delete form to database"})
    }

}




