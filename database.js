const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/erp",{
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