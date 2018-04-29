// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb'); //same code


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');

  // db.collection('Users').deleteMany({name:'Nina'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id:new ObjectID('5ae4cda1a4c08d2250d73c80')}).then((result)=>{
    console.log(result);
  })

  client.close();

}); // url where db exist(server or local) and callback function
// TodoApp is a new database which will be created.
//27017 is port
