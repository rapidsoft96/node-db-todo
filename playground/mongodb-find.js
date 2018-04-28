// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb'); //same code


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');

  db.collection('Users').find({
    name:'Zlatko'
  }).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err)=>{
    console.log('Unable to fetch data',err);
  });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err)=>{
  //   console.log('Unable to fetch data',err);
  // });

  client.close();

}); // url where db exist(server or local) and callback function
// TodoApp is a new database which will be created.
//27017 is port
