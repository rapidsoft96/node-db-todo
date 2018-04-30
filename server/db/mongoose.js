var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://rapidsoft:vxwf0506@ds261929.mlab.com:61929/db-todo-api');

module.exports={mongoose};
