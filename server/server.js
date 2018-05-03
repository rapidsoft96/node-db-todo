//library imports
const _=require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');

//local imports
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();
//port
const port=process.env.PORT || 3000; // first one is for heroku , not locally

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

//GET to fetch data
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  })
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if (!ObjectID.isValid(id)){
    res.status(404).send({});
  }
  Todo.findById(id).then((todo)=>{
    if(todo){
      res.send({todo});
    }
    else{
      res.status(404).send();
    }
  }).catch((e)=>{
      res.status(400).send();
    });
});

app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if (!ObjectID.isValid(id)){
    res.status(404).send({});
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if (todo){
      res.send({todo});
    }
    else{
      res.status(404).send();
    }
  }).catch((e)=>{
    res.status(400).send();
  });
});

//UPDATE route
app.patch('/todos/:id',(req,res)=>{
  var id=req.params.id;
  var body = _.pick(req.body,['text','completed']); //properties that user can update ,method pick()
  if (!ObjectID.isValid(id)){
    res.status(404).send({});
  }

  //checking the completed value , and setting variable completedAt
  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt=new Date().getTime() // return javascript time stamp
  } else{
    body.completed=false;
    body.completedAt=null;
  }
//making query to update db
  Todo.findByIdAndUpdate(id,{$set:body}, {new: true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
    
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.listen(port,()=>{
  console.log(`Started up at port ${port}`);
});


module.exports={app};
