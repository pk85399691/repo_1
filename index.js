const fs = require('fs');
const http = require('http');
const url = require('url');
const mongoose = require('mongoose');
const connection = require('./back-end/connection');
const express = require("express");
const bodyParser = require('body-parser');
const CRUD = require('./back-end/CRUD')
const bussiness_schema = require('./back-end/bussiness_schema');
const { query } = require('express');
let PORT = process.env.PORT || 5000;
const app = express();
/////////////////////////////////// create server ///////////////////////////////
app.use(express.static(__dirname + '/front-end'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connection.con();

//////////////////////////////// CRUD operation ///////////////////////////////////

/////// CREATE SHOPKEEPER //////
app.post("/create_shopkeeper", (req, res) => {
    CRUD.insertShopkeeperData([req.body])
    res.status(200).send("shopkeeper added successfully");
});
////// CREATE PRODUCT //////////
app.post("/create_product", (req, res) => {
    CRUD.insertProductData([req.body])
    res.status(200).send("product addaded successfully")
});
//////// READ  SHOPKEEPER//////////

app.get('/get_shopkeeper_by_id/:id', async (req, res) => {

    try {
        const data = await bussiness_schema.SHOPKEEPER.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            shopkeeper: {
                data
            }
        })
    } catch (err) {
        console.log(err);
    }
});
////////READ ALL SHOPKEEPER ///////

app.get("/get_all_shopkeeper", async (req, res) => {
    const data = await bussiness_schema.SHOPKEEPER.find()
    // const data = CRUD.getAllShopkeeperData()
    res.status(200).json({
        status: 'success',
        data
    })


});
///////UPDATE SHOPKEEPER
app.patch('/update_shopkeeper_by_id/:id', async (req, res) => {

    try {
        const data = await bussiness_schema.SHOPKEEPER.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status: 'success',
            shopkeeper: {
                data
            }
        })
    } catch (err) {
        console.log(err);
    }
});
////////////////DELETE SHOPKEEPER
app.patch('/delete_shopkeeper_by_id/:id', async (req, res) => {

    try {
        const data = await bussiness_schema.SHOPKEEPER.findByIdAndDelete(req.params.id)
            
        res.status(204).json({
            status: 'success',
            shopkeeper: {
                data
            }
        })
    } catch (err) {
        console.log(err);
    }
});
/////// READ PRODUCT
app.get("/get_product_by_id/:id", async(req, res) => {
    try {
        const data = await bussiness_schema.PRODUCT.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (err) {
        console.log(err);
    }
});
////////READ ALL PRODUCT ///////
app.get("/get_all_product", async(req, res) => {
    const data = await bussiness_schema.PRODUCT.find()
    // const data = CRUD.getAllShopkeeperData()
    res.status(200).json({
        status: 'success',
        data
    })
});

//////////////// UPDATE PRODUCT
app.patch('/update_product_by_id/:id', async (req, res) => {

    try {
        const data = await bussiness_schema.PRODUCT.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status: 'success',
            data            
        })
    } catch (err) {
        console.log(err);
    }
});
//////////////// DELETE PRODUCT
app.patch('/delete_product_by_id/:id', async (req, res) => {

    try {
        const data = await bussiness_schema.PRODUCT.findByIdAndDelete(req.params.id)
            
        res.status(204).json({
            status: 'success',
            data
        })
    } catch (err) {
        console.log(err);
    }
});
////////////////////////////////// listning request ///////////////////////////

app.listen(PORT, () => {
    console.log('listning on port ' + PORT);

});