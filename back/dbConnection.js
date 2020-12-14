var mongoose = require('mongoose');
const Pusher = require('pusher');
require('dotenv').config() ;


const pusher = new Pusher({
  appId: process.env.Pusher_AppId,
  key: process.env.Pusher_Key,
  secret: process.env.Pusher_secret,
  cluster: process.env.Pusher_cluster,
  useTLS: process.env.Pusher_useTLS
});
// Db config 

const Connection_url= process.env.MongoDb;

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

  /* implementing instruction to delete all the documents inside the collection */
    // msgCollection.remove({},(err,res)=>{
    //   if(err)
    //   console.log('there is an error',err);
    //   else 
    //   console.log('successfully deleted everyThing!',res);
    // })
  const changeStream = msgCollection.watch();

  changeStream.on("change",(change)=>{
    console.log('something is changed: ', change);

    if(change.operationType==="insert")
    {
      const messsageDetails = change.fullDocument;
      pusher.trigger('message','inserted',
      {
        name:messsageDetails.name,
        message:messsageDetails.message,
     
      });
    }else{console.log('error on puhser trigger ! ');}
  });

})
module.exports;