
const { SHOPKEEPER, PRODUCT } = require("./schema/bussiness_schema");
const con = require("./connections/connection")
/////////////////////////////////////////////////// create SHOPKEEPER ///////////////////////////////////////////////
const insertShopkeeperData = ([shopkeeperObj]) => {
    const data_length = shopkeeperObj.length;
    let dataObj = [];
    for (let i = 0; i < data_length; i++) {
        dataObj[i] = {
            shop_name: shopkeeperObj[i].shop_name,
            shopkeeper_name: shopkeeperObj[i].shopkeeper_name,
            whatsapp_number: shopkeeperObj[i].whatsapp_number,
            alternate_number: shopkeeperObj[i].alternate_number,
            shopkeeper_image: shopkeeperObj[i].shopkeeper_image,
            shop_address: shopkeeperObj[i].shop_address,
            location: shopkeeperObj[i].location,
            bussiness_catogery: shopkeeperObj[i].bussiness_catogery,
            bussiness_type: shopkeeperObj[i].bussiness_type,
            delivery_availability: shopkeeperObj[i].delivery_availability,
            delivery_range: shopkeeperObj[i].delivery_range,
            available_items: shopkeeperObj[i].available_items,
            token: shopkeeperObj[i].token,
            views: shopkeeperObj[i].views,
            leads: shopkeeperObj[i].leads,
            orders: shopkeeperObj[i].orders,
            shop_logo_image: shopkeeperObj[i].shop_logo_image,
            delivery_min_amount: shopkeeperObj[i].delivery_min_amount,
            otp: shopkeeperObj[i].otp
        };
    }
    SHOPKEEPER.collection.insertMany(dataObj);
}
exports.insertShopkeeperData = insertShopkeeperData;

////////////////////////////////////////////////// CREATE PRODUCT //////////////////////////////////////////////////

const insertProductData = ([productObj]) => {
    const data_length = productObj.length;
    let dataObj = [];
    for (let i = 0; i < data_length; i++) {
        dataObj[i] = {
            product_name: productObj[i].product_name,
            product_mrp: productObj[i].product_mrp,
            selling_price: productObj[i].selling_price,
            unit: productObj[i].unit,
            product_description: productObj[i].product_description,
            category: productObj[i].category,
            sub_category:productObj[i].sub_category,
            discount: productObj[i].discount,
            image: productObj[i].image
        };
    }
    PRODUCT.collection.insertMany(productObj);
}
exports.insertProductData = insertProductData;
////////////////////////////////////////////////// READ  SHOPKEEPER DATA //////////////////////////////////////////
/////// only for admin access
const getAllShopkeeperData = async () => {
    const allShopkeerData = await SHOPKEEPER.find()
    return allShopkeerData;
}
exports.getAllShopkeeperData = getAllShopkeeperData;

//////////////////////////////////////////////// READ PRODUCT DATA ///////////////////////////////////////////////
///////only for admin access
const getAllProductData = async () => {
    const allProduct = await PRODUCT.find();
    return allProduct;
}
exports.getAllProductData = getAllProductData;
