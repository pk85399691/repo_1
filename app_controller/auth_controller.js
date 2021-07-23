const catchAsync = require('../utils/catchAsync');
const { USER } = require('../back-end/schema/bussiness_schema');
exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await USER.create({
        name: req.body.name,
        user_name: req.body.user_name,
        user_mail: req.body.user_mail,
        photo: req.body.photo,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    });
    res.status(201).json({
        status: 'success',
        data: {
            User: newUser
        }
    });
});