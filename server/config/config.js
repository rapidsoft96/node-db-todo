var env=process.env.NODE_ENV || 'development';

//ovde proveravamo da li je env development da bi znali koju bazu treba koristititi
//tacnije da li pravu bazu ili onu za test.
if (env === 'development'){
  process.env.PORT=3000;
  process.env.MONGODB_URI='mongodb://localhost:27017/TodoApp';
} else if (env==='test'){
  process.env.PORT=3000;
  process.env.MONGODB_URI='mongodb://localhost:27017/TodoAppTest';
}
