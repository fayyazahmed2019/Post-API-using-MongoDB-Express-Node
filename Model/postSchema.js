const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    date: {type:String},
    detail: {type:String},
    amount: {type:Number}
}) 


const postModel = mongoose.model('postData',postSchema);

module.exports = postModel;