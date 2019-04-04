const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("The result of the calculation is: " + result);
});

app.get("/bmicalc", function(req, res){
  res.sendFile(__dirname + "/bmicalc.html");
});

app.post("/bmicalc", function(req, res){
  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);

  var bmi = weight / (height * height);
  res.send("Your BMI is: " + bmi);
});

app.listen(port, function(){
  console.log(`Listening to port ${port}`);
});
