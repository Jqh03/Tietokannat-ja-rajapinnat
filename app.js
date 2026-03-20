const express=require("express");
const app=express();
const PORT=3000;
const productsRouter=require('./routes/products');
const customersRouter=require('./routes/customers');
const loginRouter=require('./routes/Login');
const dotenv=require("dotenv");
const jwt=require("jsonwebtoken");

app.use(express.json());
dotenv.config();


app.get("/", function(request, response){
    response.send("Verkkokauppa API");
});
app.use("/login",loginRouter);
app.use("/products",productsRouter);
app.use("/customers",customersRouter);


app.listen(PORT, function(){
    console.log("Palvelin kuuntelee porttia: "+PORT)

});

function authenticateToken(){
  if (!authHeader) {
      return response.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return response.sendStatus(401);
    }

    jwt.verify(token, process.env.MY_TOKEN, function(err, user) {
      if (err) {
        return response.sendStatus(403);
      }
      request.user = user;
      next();
    })
}
module.exports=app;