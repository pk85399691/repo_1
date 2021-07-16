const mongoose=require('mongoose')
mongoose.pluralize(null);
/////////////////////////////////////////////////////MONGOOSE SCHEMA /////////////////////////
// console.log(connection);
 const con=()=>mongoose.connect('mongodb+srv://stark:ypClzRen1dTjtZcJ@cluster0.jdlyo.mongodb.net/SDB1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
});
exports.con=con; 

