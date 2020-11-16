const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    Question: {
        type:String,
        required:true
    }, 
    Answers: {
        type:Array,
        required:true
    }, 
    Subjects:{
        type:Array,
        required:true
    },
    date: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Question', QuestionSchema)