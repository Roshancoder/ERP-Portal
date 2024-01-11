var express = require('express');
var router = express.Router();
var alert = require('alert');
const jwt = require('jsonwebtoken');
const app = express();
var useremail = 1;
var rollx = 1;
const JWT_SECRET = "super secret...."
var token = 1;
var ue;
var link;
var globe = "s1";
var check;
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: 'roshansingh6039@gmail.com',
    pass: 'sslg uavy bsxg cnnm'
  }
});
router.get('/helpSupport',(req,res)=>{
    res.render('helpSupport',{rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
});
router.post('/login',async(req,res)=>{
    try{
        console.log(req.body);
        const email = req.body.Email;
        const password = req.body.pass;
        console.log(email);
        useremail =await node.findOne({email:email});
        rollx = "img" + useremail.roll;
        if(useremail.password === password){
            res.render('dashboard',{rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
        }
        else{
            alert("invalid password");
        }
    } catch(error){
        res.send(error);
    }
})
router.get('/dashboard',(req,res)=>{
    if(req.session.user){

        res.render('dashboard',{rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
    }else{
        res.send('Unauthorized user');
    }
});
router.get('/signout',(req,res)=>{
    req.session.destroy(function(err){
      if(err){
        console.log('Error Occured');
      }else{
        res.render('base',{title:"ERP Portal"})
      }
    })
});
router.get('/home',(req,res)=>{
    res.render('dashboard',{rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
})
router.get('/project',(req,res) =>{
    res.render('project', {rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
})
router.post('/pro2',(req,res) =>{
    globe = req.body.session1;
    check = req.body.rrr;
    if(check != useremail.roll)alert("Invalid Roll");
    else{
    console.log(globe);
    let pro1 , pro2;
    if(globe == "s7"){
        pro1 = "Movie Recommender System";
        pro2 = "Erp Portal";
    }
    else if(globe == "s6"){
        pro1 = "Ultrasonic Distancrce Meter";
        pro2 = "Music Reactive LED";
    }
    else if(globe == "s5"){
        pro1 = "Facebook Clone";
        pro2 = "Netflix Clone";
    }
    else if(globe == "s4"){
        pro1 = "Rectifier";
        pro2 = "Library Management System";
    }
    else if(globe == "s3"){
        pro1 = "Rectifier";
        pro2 = "Library Management System";
    }
    else if(globe == "s2"){
        pro1 = "Rectifier";
        pro2 = "Library Management System";
    }
    else{
        pro1 = "Rectifier";
        pro2 = "Library Management System";
    }
    res.render('project2',{pro1 : pro1 ,pro2: pro2 ,rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
}
})

router.get('/result',(req,res) =>{
    res.render('result',{rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
})
router.get('/fees',(req,res) =>{
    res.render('fees' , {rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
})
router.get('/attendance',(req,res) =>{
    res.render('attendence', {rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
})
router.post('/imge',(req,res) =>{
    var a = req.body.rrr;
    if(a != useremail.roll){
        alert("invalid rollno.");
    }
    else{
    var b = req.body.session;
    var c = "s1"+useremail.roll;
    var d = "s2"+useremail.roll;
    var e = "s3"+useremail.roll;
    var f = "s4"+useremail.roll;
    if(b === "s1"){
        res.render('img',{im:c})
    }
    else if(b === "s2"){
        res.render('img',{im:d})
    }
    else if(b === "s3"){
        res.render('img',{im:e})
    }
    else if(b === "s4"){
        res.render('img',{im:f})
    }
    else{
        alert("result is not published");
    }}
})
router.post('/search',(req,res) =>{
    var a = req.body.search;
    if(a == "dashboard"){
        res.render('dashboard',{rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
    }
    else if(a == "result"){
        res.render('result',{roll: useremail.roll});
    }
    else if(a == "fees"){
        res.render('fees');
    }
    else if(a == "home"){
        res.render('dashboard',{rollx: rollx,user: useremail.name, name : useremail.name, email: useremail.email, contact: useremail.contact,dep : useremail.dep,sem : useremail.sem, branch : useremail.branch ,roll: useremail.roll});
    }
    else if(a == "attendence"){
        res.render('attendence');
    }
    else{
       // res.send("invalid keyword");
       alert("invalid keyword")
    }
})
router.post('/att',(req,res) =>{
    var x = req.body.rollno;
    console.log(x);
    if(x != useremail.roll){
        alert("invalid roll no.");
    }
    else{
    var y = req.body.semes;
    console.log(y);
    if(y == "s1"){
        var m = "a1"+useremail.roll;
        res.render('attview',{im:m})
    }
    else if(y == "s2"){
        var m = "a2"+useremail.roll;
        res.render('attview',{im:m})
    }
    else{
        alert("data not available");
    }
   }
})
router.get('/education',(req,res) =>{
    res.render('education',{ins:useremail.ins,s1:useremail.s1,s2:useremail.s2,s3:useremail.s3});
})

router.get('/forgetpassword',(req,res) =>{
    res.render('forgetpassword');
})
router.post('/forgetpassword',async(req,res) =>{
    var em = req.body.Email;
    console.log(em);
    console.log(em);
    try{
       ue = await node.findOne({email:em})
       const secret = JWT_SECRET + ue.password;
       const payload ={
        email: ue.email,
        id: ue.id
       }
       token = jwt.sign(payload,secret,{expiresIn: '5m',})
       link = `http://localhost:8080/route/upass/${ue.id}/${token}`
       var mailOptions = {
        from: 'roshansingh6039@gmail.com',
        to: ue.email,
        subject: 'Reset Your Password',
        text: link
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
           alert("email sent successfully");
        }
      });
       console.log(link);
    }catch(error){
       alert("invalid user");
    }
})
router.get('/upass/:id/:token', (req,res) =>{
    res.render('upass')
})
router.post('/upass' , async(req,res) =>{
    var pass = req.body.pass;
    let upd = await node.updateOne({password:ue.password},{$set : {password:pass}});
    alert("password updated successfully!!");
    res.render('base');
})
router.get('/adminLogin',(req,res)=>{
    res.render('adminlogin');
})
router.post('/adminLogin',async(req,res)=>{
    var admin = req.body.Email11;
    if(admin != "roshansingh6039@gmail.com"){
        alert("Invalid Email");
    }
    var adm = await node.findOne({email:admin});
    var rollx = "img"+adm.roll;
    if(adm.password != req.body.pass11){
        alert("Invalid password");
    }
    else{
        res.render('dashboard',{rollx: rollx,user: adm.name, name : adm.name, email: adm.email, contact: adm.contact,dep : adm.dep,sem : adm.sem, branch : adm.branch ,roll: adm.roll});
    }
})
module.exports = router;