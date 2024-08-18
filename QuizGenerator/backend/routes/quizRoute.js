const express = require('express')
const quizController= require('../controllers/quizController')
const router = express.Router()


// router.route('/')
//       .post(createNewQuiz)


router.post('/addNewQuiz', quizController.createNewQuiz)
router.get('/getQuizzes', quizController.getAllQuizzes)

module.exports = router