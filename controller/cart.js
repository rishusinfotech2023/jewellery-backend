const Cart = require('../module/Cart');
const jwt = require('../controller/jwt')

exports.getCart = async (req, res) => {
  try {
    const items = await Cart.find();
    res.json({ items });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

exports.addToCart = async (req, res) => {
  const { product_id, price, name, gross_weight,upload } = req.body;

  const newItem = new Cart({ name,price,product_id,gross_weight,upload });

  try {
    await newItem.save();
    res.status(200).json({ message: 'Item added to cart', item: newItem });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

exports.DeleteCart = async (req,res) =>{
    
      try {
        const {id} = req.params ;
        if(!id){
          return res.status(400).json({message : "Id parameter is required"})
        }
        const product = await Cart.findById(id)
        if(!product)
        return res.status(404).json({ message : "Product not found"})

        await Cart.deleteOne({ _id : id})
        return res.status(200).json({message : "Product Delete Successfuly"})
      } catch (error) {
        return res.status(500).json({message : "Failed to Delete form Database"})
      }
    
}













