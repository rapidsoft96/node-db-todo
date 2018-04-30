const {mongoose}=require('./../server/db/mongoose');
const {ObjectID}=require('mongodb'); //import this to check if ID is valid.
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

//TODOs:
// var id='5ae6053e4ff3bc22c07296ca';
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos: ',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo: ',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID: ',todo);
// }).catch((e)=> console.log(e));

//Users
var id='5ae5d0f120d4d508b07f00df';
User.findById(id).then((user)=>{
  if(!user){
    return console.log('Unable to find ID');
  }
  console.log('User by ID: ',JSON.stringify(user,undefined,2));
}).catch((e)=> console.log(e));
