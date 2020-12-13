var mongoose = require('mongoose');
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "1122523",
  key: "6e0436202af424d9905b",
  secret: "0e47e21e112fd2f915e0",
  cluster: "eu",
  useTLS: true
});
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