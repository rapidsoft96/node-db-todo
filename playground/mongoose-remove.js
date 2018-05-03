const {mongoose}=require('./../server/db/mongoose');
const {ObjectID}=require('mongodb'); //import this to check if ID is valid.
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

//Todo.remove({}) - remove All
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove().then((result)=>{ //this method return object which is deleted
//
// });
Todo.findByIdAndRemove('5ae5d0f120d4d508b07f00df').then((todo)=>{
  console.log(todo);
});
