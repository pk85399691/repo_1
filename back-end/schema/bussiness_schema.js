var express = require("express");
const mongoose = require("mongoose")
const validator = require('validator')
const bcrypt = require('bcryptjs')
var app = express();
const connection = require('../connections/connection');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connection.con();

const shop_schema = new mongoose.Schema({
    shop_name: {
        type: String
    },
    shopkeeper_name: {
        type: String
    },
    whatsapp_number: {
        type: Number
    },
    alternate_number: {
        type: Number
    },
    shopkeeper_image: {
        type: String
    },
    shop_address: {
        type: String
    },
    location: {
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
    available_items: {
        type: String
    },
    token: {
        type: String
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
    delivery_min_amount: {
        type: Number
    },
    otp: {
        type: Number
    },


});


const SHOPKEEPER = mongoose.model('SHOPKEEPER', shop_schema);
exports.SHOPKEEPER = SHOPKEEPER;


///////////////////////////////// PRODUCT SCHEMA ///////////////////////////////////

const product_schema = new mongoose.Schema({
    product_name: {
        type: String
    },
    product_mrp: {
        type: Number
    },
    selling_price: {
        type: Number
    },
    unit: {
        type: String
    },
    product_description: {
        type: String
    },
    category: {
        type: String
    },
    sub_category:{
        type:String
    },
    discount: {
        type: Number
    },
    image: {
        type: String
    }
});
const PRODUCT = mongoose.model('PRODUCT', product_schema);
exports.PRODUCT = PRODUCT


const User = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    user_name: {
        type: String,
        required: [true, 'please enter your name'],
        unique: true
    },
    user_mail: {
        type: String,
        required: [true, 'please provide your e-mail'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please provide a valid email']
    },
    photo: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'please enter password as per password policy'],
        minlength: 8
    },
    confirm_password: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            // This only works on CREATE and SAVE!!!
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

User.pre('save', async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field
    this.confirm_password = undefined;
    next();
});

User.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
});

User.pre(/^find/, function (next) {
    // this points to the current query
    this.find({ active: { $ne: false } });
    next();
});

User.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

User.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );

        return JWTTimestamp < changedTimestamp;
    }

    // False means NOT changed
    return false;
};

User.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    console.log({ resetToken }, this.passwordResetToken);

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

const USER = mongoose.model('USER', User);
exports.USER = USER;


