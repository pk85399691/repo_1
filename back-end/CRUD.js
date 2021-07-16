const { connection } = require("mongoose");
const { SHOPKEEPER, PRODUCT } = require("./bussiness_schema");
const con = require("./connection")
/////////////////////////////////////////////////// create SHOPKEEPER ///////////////////////////////////////////////
const insertShopkeeperData = ([shopkeeperObj]) => {
    SHOPKEEPER.collection.insertMany(shopkeeperObj);
}
exports.insertShopkeeperData = insertShopkeeperData;

////////////////////////////////////////////////// CREATE PRODUCT //////////////////////////////////////////////////

const insertProductData = ([productObj]) => {
    PRODUCT.collection.insertMany(productObj);
}
exports.insertProductData = insertProductData;
////////////////////////////////////////////////// READ  SHOPKEEPER DATA //////////////////////////////////////////
/////// only for admin access
const getAllShopkeeperData = async() => {
    const allShopkeerData =await SHOPKEEPER.find()
       return allShopkeerData;
}
exports.getAllShopkeeperData=getAllShopkeeperData;

//////////////////////////////////////////////// READ PRODUCT DATA ///////////////////////////////////////////////
///////only for admin access
const getAllProductData=async()=>{
    const allProduct = await PRODUCT.find();
}
const getProductData=(productId)=>{
    
}