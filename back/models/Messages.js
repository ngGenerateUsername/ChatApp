var mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    reciver:Boolean
});
 
    // useless comment
module.exports = mongoose.model('messagecontent',MessageSchema);