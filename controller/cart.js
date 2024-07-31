const jwt = require('../controller/jwt')
const Cart = require('../module/Cart')


module.exports =  async (req,res)=>{

    try {        
    const cartObj = new Cart({
        product_id : req.body.product_id,
        price : req.body.price,
        user_id : req.body.user_id, 
        store_id : req.cody.store_id,
    }) 
    const cartData = await cartObj.save();

    return res.status(200).json({message : "Data is save in the Cart", success : true , data : cartData})


    } catch (error) {
        res.status(500).json({ message : error.message})
    }
}

module.exports = async (req,res)=>{

    try {
        const cartFetch = new Cart({
            name : req.body.name,
            price : req.body.name,
            gross_weight : req.body.gross_weight

        })
        const cartFetchData = await cartFetch.save()

        return res.send(200).json({message : "Fetch data is successfuly", success : true, data : cartFetchData}  )
        
    } catch (error) {
        return res.send(500).json({ message : error.message})
    }
}




