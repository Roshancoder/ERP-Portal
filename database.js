require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
var conn = mongoose.connection;
conn.on('connected',function(){
   console.log("connected");
})
conn.off('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
//mongodb://0.0.0.0:27017/erp"