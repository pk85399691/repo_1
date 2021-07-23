const fs = require('fs');
const http = require('http');
const url = require('url');
const mongoose = require('mongoose');
const connection = require('./back-end/connections/connection');
const express = require("express");
const bodyParser = require('body-parser');
const CRUD = require('./back-end/CRUD')
const bussiness_schema = require('./back-end/schema/bussiness_schema');
const { query } = require('express');
const appErr = require('./utils/appErr');
const error_controller = require('./app_controller/error_controller');
const catchAsync = require('./utils/catchAsync');
const auth_controller=require('./app_controller/auth_controller')
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

app.get('/get_shopkeeper_by_id/', async (req, res,next) => {

    try {
        console.log(req.query)
        const data = await bussiness_schema.SHOPKEEPER.findById(req.query.id);
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

app.get("/get_all_shopkeeper", async (req, res,next) => {
    const data = await bussiness_schema.SHOPKEEPER.find()
    // const data = CRUD.getAllShopkeeperData()
    res.status(200).json({
        status: 'success',
        data
    })


});
///////UPDATE SHOPKEEPER
app.patch('/update_shopkeeper_by_id/', async (req, res,next) => {

    try {
        const data = await bussiness_schema.SHOPKEEPER.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
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
app.patch('/delete_shopkeeper_by_id/', async (req, res,next) => {

    try {
        const data = await bussiness_schema.SHOPKEEPER.findByIdAndDelete(req.query.id)

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
app.get("/get_product_by_id/", async (req, res,next) => {
    try {
        const data = await bussiness_schema.PRODUCT.findById(req.query.id);
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (err) {
        console.log(err);
    }
});
////////READ ALL PRODUCT ///////
app.get("/get_all_product", async (req, res,next) => {
    const data = await bussiness_schema.PRODUCT.find()
    // const data = CRUD.getAllShopkeeperData()
    res.status(200).json({
        status: 'success',
        data
    })
});

//////////////// UPDATE PRODUCT
app.patch('/update_product_by_id/', async (req, res,next) => {

    try {
        const data = await bussiness_schema.PRODUCT.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
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
app.patch('/delete_product_by_id/',catchAsync( async (req, res,next) => {

    
        const data = await bussiness_schema.PRODUCT.findByIdAndDelete(req.query.id)

        res.status(204).json({
            status: 'success'
            
        })
    
}));

//////// SIGNUP USER
app.post("/user_signup",auth_controller.signup)
//////////////// HANDLING UNHANDLED ROUTES
app.all('*', (req, res, next) => {
    next(new appErr('unhandled route', 404));
})
//////////////// GLOBAL ERROR HANDLER
app.use(error_controller);
////////////////////////////////// listning request ///////////////////////////

app.listen(PORT, () => {
    console.log('listning on port ' + PORT);

});