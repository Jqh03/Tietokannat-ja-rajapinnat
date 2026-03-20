const db=require("../database");

const orders={
    accCart(username, payment_method, callback){
        return db.query("INSERT INTO cart(username,order_date, payment_method) VALUES(?,?,?",
        [
            username,
            newC.order_date,
            

        ],callback);
    }
}

module.exports=orders;