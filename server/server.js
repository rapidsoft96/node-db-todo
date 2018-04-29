//library imports
var express=require('express');
var bodyParser=require('body-parser');


//local imports
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

//middleware
app.use(bodyParser.json());
//this is the middleware , when we type console.log(req.body) it knows that is parsed

//routes
//post , let us create new todos
app.post('/todos',(req,res)=>{  // '/todos' for resource creation
  var todo=new Todo({
    text:req.body.text,
    completed:req.body.completed,
    completedAt:req.body.completedAt
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
}); //url and callback

app.listen(3000,()=>{
  console.log('Started on port 3000');
});


module.exports={app};
