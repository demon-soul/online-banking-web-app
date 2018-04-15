var express = require('express');
var router = express.Router();
var path = require('path');

router.post('/',(req,res)=>{
  console.log(req.body.email + ' ' + req.body.password );
  
})

module.exports = router;
