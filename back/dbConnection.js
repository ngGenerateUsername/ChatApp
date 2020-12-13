var mongoose = require('mongoose');

// Db config 

const Connection_url="mongodb+srv://admin:sispoof@cluster0.3rdbn.mongodb.net/ChatApp?retryWrites=true&w=majority";

// var connection =
 mongoose.connect(Connection_url,{
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true
});

const db = mongoose.connection;
db.once('open',()=>{
  console.log('DB connected');

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change",(change)=>{
    console.log('something is changed: ', change);
  });

})
module.exports;