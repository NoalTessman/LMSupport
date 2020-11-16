const express = require('express');
const Question = require('../models/Question');
const Answer = require('../models/Answer');
// const { findById } = require('../models/Question');
// const { response } = require('express');
const router = express.Router();

//Gets all questions
router.get('/', async (req, res)=>{
    try{
        const questions = await Question.find();
        res.json(questions);
    }catch(err){
        res.json({message:err})
    }
});


router.get('/specific', (req, res)=>{
    res.send("Good post");
});

//Submits a question
router.post('/', async (req, res) => {
    const question = new Question({
        Question: req.body.Question,
        Answers: req.body.Answers,
        Subjects: req.body.Subjects
    })

    try{
    const savedQuestion = await question.save();
    res.json(savedQuestion);
    }catch(err){
        res.json({message:err})
    }
    console.log("question created")
}) 

//Delete a Question
router.delete('/:questionID', async(req,res)=>{
try{
    const removedQuestion = await Question.deleteMany({_id:req.params.questionID})
    res.json(removedQuestion)
}catch(err){
    res.send(err)
}})

//Adds answer to question
router.patch('/:id/addanswer', async (req, res, next) => {
    try{
    const answer =await new Answer({
        Answer:req.body.Answer,
        Votes:1
    });
    id=req.params.id;
    const result = await Question.findByIdAndUpdate(id,{$push:{"Answers":answer}})
    res.send(result);
    console.log(result)
    } catch(err){
        console.log(err.message)
    }
}) 
//Searches for questions
router.get('/search', async (req,res,next)=>{
    try{
        const result = await Question.find({"Question":RegExp('\\b'+ req.body.search + '\\b','i')}, function( err, docs){
            console.log("docs" + docs)
            console.log("docs" + docs)
        })
        res.send(result)
    }
    catch(err){

    }
})

//get answers for question
router.get("/:id/answers", async(req, res, next)=>{
    try{
    id=req.params.id;
    answers = await Question.findById(id)
    answerarray = []
    answers.Answers.forEach(a =>{
        answerarray.push(a)
    })

    res.send(answerarray)
    }
    catch(e){
        console.log(e);
    }
})
////Delete an answer
router.patch('/:questionID/answer/:answerID', async(req,res)=>{
    try{
        const result = await Question.findByIdandUpdate(req.params.questionID, function(err, foundQuestion){
            if(err){
                res.send(err.message)
            } if(!foundQuestion){
                res.send("Error, question not found")
            } else{
                foundQuestion.updateOne({$pull: {Answers: {_id: req.params.answerID}}},
                    function(err){
                        if(err){
                            res.send(err.message);
                            console.log(err)
                        } else{
                            res.send("great success!")
                        }
                    })
            }
        })

    }catch(err){
        res.send(err)
    }})

module.exports= router;

//http://localhost:8080/questions/5fadc6a9123487a4843b0673/answer/5fadc7a2123487a4843b0677
