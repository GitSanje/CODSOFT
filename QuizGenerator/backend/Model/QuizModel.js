const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;


// Define the Statistics schema
const StatisticsSchema = new Schema({
    totalAttempts: { type: Number, required: false },
    correctAttempts: { type: Number, required: false },
    incorrectAttempts: { type: Number, required: false }
  });

const QuestionSchema = new Schema ( {
    mainques : { type: String, required: true},
    choices : { type: [String], required: true},
    correctAnswer: { type: Number, required: true },
    answerResult : { type: Number, default: -1},
    statistics: { type: StatisticsSchema, required: false } 

})

const QuizSchema = new Schema({
    id: { type: Number, unique: true },
    icon: { type: String, required: false }, // Store the icon as a string or URL
    quizTitle: { type: String, required: true },
    quizCategory: { type: String, required: false },
    difficulty: { type: String, required: false },
    questions: { type: [QuestionSchema], required: true } // Array of embedded questions
  });
  


QuizSchema.plugin(AutoIncrement, {inc_field: 'id'});

// Create the Quiz model
const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;