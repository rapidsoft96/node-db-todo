// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb'); //same code


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');
  // db TodoApp is still not visible in RoboMongo until we add some record to it.
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // }); // insert new document into collection

  db.collection('Users').insertOne({
    name: 'Nina',
    age: 20,
    location: 'Serbia'
  }, (err,result)=>{
    if (err){
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops,undefined,2));
  });


  client.close();

}); // url where db exist(server or local) and callback function
// TodoApp is a new database which will be created.
//27017 is port
