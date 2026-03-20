const express=require("express");
const router=express.Router();
const orders=require("../models/orders_model");

router.post("/cart",function(request,response){
    orders.accCart();

});

module.exports=router;