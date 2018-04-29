// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb'); //same code


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5ae498e1d1993522349ed6f4')
  },{
    $set:{
      name:'Zeljko'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  client.close();

}); // url where db exist(server or local) and callback function
// TodoApp is a new database which will be created.
//27017 is port
