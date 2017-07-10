
var express=require("express");
var mongoose=require("mongoose");
var app=express();
var bodyParser=require("body-parser");
var cors = require('cors');
const connectionString="mongodb://localhost:27017/ekart";

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());
mongoose.connect(connectionString,function(err,success){
  if(err){
    console.log("Not Connected to DB");
  }
  else{
    console.log("Connected to the Database");
  }
});

var schemaobj={
  test: { type: String }
}
var testSchema=mongoose.Schema(schemaobj,{versionKey: false});

mongoose.model("tests",testSchema);
var testModel = require("mongoose").model("tests");
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests

/*app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
});*/

app.get("/api/getEmployess",(req,res)=>{
 var employees=[{empid:1,empname:"Ganesh"},{empid:2,empname:"Kumar"}];
 res.json({data:employees});
 res.end();
})

app.post("/api/getEmployess",(req,res)=>{
  console.log("==>"+req.body.test);
  /*var testsave=new testModel(req.body);
  testsave.save()
  .then((data)=>{
   res.json({data:data});     
  })*/ 
  res.end();
})



app.listen(3000);

console.log("The Server is UP");