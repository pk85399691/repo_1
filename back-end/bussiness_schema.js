var express = require("express");
const mongoose = require("mongoose")
var app = express();
const connection = require('./connection');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connection.con();

const shop_schema = new mongoose.Schema({
    shop_name: {
        type: String
    },
    shopkeeper_name:{
        type:String
    },
    whatsapp_number:{
        type:Number
    },
    alternate_number:{
        type:Number
    },
    shopkeeper_immage:{
        type:String
    },
    shop_address: {
        type: String
    },
    location:{
       // type yet to define
        
    },
    bussiness_catogery: {
        type: String
    },
    bussiness_type: {
        type: String
    },
    delivery_availability: {
        type: Boolean
    },
    delivery_range: {
        type: Number
    },
    available_items:{
        type:String
    },
    token:{
        type:String
    },
    views: {
        type: Number
    },
    leads: {
        type: Number
    },
    orders: {
        type: Number
    },
    shop_logo_image: {
        type: String
    },
    delivery_min_amount:{
        type: Number
    },
    otp:{
        type:Number
    },
    

});


const SHOPKEEPER = mongoose.model('SHOPKEEPER', shop_schema);
exports.SHOPKEEPER = SHOPKEEPER;


///////////////////////////////// PRODUCT SCHEMA ///////////////////////////////////

const product_schema = new mongoose.Schema({
    product_name:{
        type:String
    },
    product_mrp:{
        type:Number
    },
    selling_price:{
        type:Number
    },
    unit:{
        type:String
    },
    product_description:{
        type:String
    },
    category:{
        type:String
    },
    discount:{
        type:Number
    },
    image:{
        type:String
    }
});
const PRODUCT=mongoose.model('PRODUCT',product_schema);
exports.PRODUCT=PRODUCT






