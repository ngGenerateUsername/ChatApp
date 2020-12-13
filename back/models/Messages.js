var mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    reciver:Boolean
});

module.exports = mongoose.model('messagecontent',MessageSchema);