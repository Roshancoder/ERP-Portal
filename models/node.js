var mongoose=require('mongoose');
var db = require('../database');
var nodeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique : true
    },
    password: {
        type:String,
        required:true
    },
    roll: {
        type:Number,
        required:true,
        unique : true
    },
    branch: {
        type:String,
        required:true
    },
    dep: {
        type:String,
        required:true
    },
    sem: {
        type:String,
        required:true
    },
    contact: {
        type:Number,
        required:true
    },
    ins: {
        type : String
    },
    s1: {
        type : String
    },
    s2: {
        type : String
    },
    s3: {
        type : String
    }
})
node = new mongoose.model("Node",nodeSchema);
module.exports={
     
    fetchData:function(callback){
       var userData=node.find({});
       userData.exec(function(err, data){
           if(err) throw err;
           return callback(data);
       })
       
    }
}