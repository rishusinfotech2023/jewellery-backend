const express=require('express');
const Router=express.Router();
const upload=require('../middleware/upload')
const jewllery=require('../controller/jewellery');
const middleware=require('../middleware/jwt');

Router.post('/addjewellery',middleware,upload,jewllery.jewellery);
Router.get('/getjewellery',jewllery.getjewellery);
Router.get('/getonejewellery/:Id',jewllery.getOnejewellery);
Router.delete('/deletejewellery/:Id',middleware,jewllery.deleteProduct);
Router.get('/search',jewllery.search)
Router.put('/update/:id',middleware,jewllery.updateJewellery);

Router.get('/:criteria?',jewllery.getFindJewellery);

module.exports=Router;