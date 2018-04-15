var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
const normalizePort = port => parseInt(port,10);
const PORT = normalizePort(process.env.PORT || 8000);

//MongoDb connection

//Routes for API
var app = express();

var signup = require('./routes/signup');

var connect = require('./routes/connect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/signup',signup);
app.use('/register',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'views','register.html'));
});
app.use('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'views','index.html'));
});






app.listen(PORT,()=>console.log("Listening on port 8000!"))
