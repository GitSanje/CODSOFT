const Quiz = require("../Model/QuizModel");

const asyncHandler = require('express-async-handler')

const createNewQuiz = asyncHandler( async ( req, res) => {

    try {
        
        const {  quizTitle, quizCategory, difficulty, questions } = req.body;
        
        if (!quizTitle || !quizCategory || !difficulty || !Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: "Please provide all required fields: quizTitle, quizCategory, difficulty, and questions." });
        }
        const duplicate = await Quiz.findOne({ quizTitle}).lean().exec()

        if(duplicate){
            return res.status(400).json({message: `${quizTitle} title already exits`})
        }
        // Ensure each question has required fields

        for ( let question of questions){
            if(!question.mainques || !Array.isArray(question.choices) || question.choices.length === 0 || question.correctAnswer === undefined){
                return res.status(400).json({ message: "Each question must have a main question, choices, and a correctAnswer index." });
            }
        }
        const quizObj = {
            quizTitle,
            quizCategory,
            difficulty,
            questions
        };

         // Save the quiz to the database
         const savedQuiz = await Quiz.create(quizObj);
         if(savedQuiz){
            res.status(201).json({message: `New Quiz ${quizTitle} has been created`});
         }
         else{
            res.status(500).json({ message: "An error occurred while creating the quiz." });
         }
        

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

})

const getAllQuizzes = asyncHandler( async(req, res) => {
    try {
        const quizzes = await Quiz.find({});

        if (!quizzes || quizzes.length === 0) {
            return res.status(404).json({ message: "No quizzes found." });
        }
        
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching quizzes.", error: error.message });
    }
})


module.exports = { createNewQuiz,getAllQuizzes };