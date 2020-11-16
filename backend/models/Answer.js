const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    Answer: {
        type:String,
        required:true
    }, 
    Votes:{
        type:Number,
        required:true
    },
    date: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Answer', AnswerSchema)