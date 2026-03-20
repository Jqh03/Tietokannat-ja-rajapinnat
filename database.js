const db=require("mysql2");
const dotenv=require("dotenv");
dotenv.config();

const connectionString="mysql://storeUser:storepass@127.0.0.1/onlinestore";//

const conn=db.createPool(connectionString);

//const conn=db.createPool(process.env.MSQL_SERVER);

module.exports=conn;