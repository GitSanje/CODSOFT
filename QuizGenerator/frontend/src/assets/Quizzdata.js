import { faCode, faBrain, faFlask, faBook } from "@fortawesome/free-solid-svg-icons";

export const quizzesData = [
    {
        id: 1,
        icon: faCode,
        quizTitle: "JavaScript Basics",
        quizCategory: "Programming",
        difficulty: "Easy",
        questions: [
            {
                mainques: "What is the correct syntax for referring to an external script called 'app.js'?",
                choices: [
                    "<script href='app.js'>",
                    "<script name='app.js'>",
                    "<script src='app.js'>",
                    "<script file='app.js'>"
                ],
                correctAnswer: 2, // index of correct answer
                answerResult: -1, // -1 means unanswered
                statistics: {
                    totalAttempts: 1000,
                    correctAttempts: 750,
                    incorrectAttempts: 250
                }
            },
            {
                mainques: "Which of the following is a JavaScript data type?",
                choices: [
                    "Boolean",
                    "Float",
                    "Integer",
                    "None of the above"
                ],
                correctAnswer: 0,
                answerResult: -1,
                statistics: {
                    totalAttempts: 900,
                    correctAttempts: 600,
                    incorrectAttempts: 300
                }
            }
        ]
    },
    {
        id: 2,
        icon: faBrain,
        quizTitle: "General Knowledge",
        quizCategory: "Trivia",
        difficulty: "Medium",
        questions: [
            {
                mainques: "Who wrote the play 'Hamlet'?",
                choices: [
                    "Charles Dickens",
                    "William Shakespeare",
                    "Mark Twain",
                    "J.K. Rowling"
                ],
                correctAnswer: 1,
                answerResult: -1,
                statistics: {
                    totalAttempts: 2000,
                    correctAttempts: 1500,
                    incorrectAttempts: 500
                }
            },
            {
                mainques: "Which planet is known as the Red Planet?",
                choices: [
                    "Earth",
                    "Mars",
                    "Jupiter",
                    "Saturn"
                ],
                correctAnswer: 1,
                answerResult: -1,
                statistics: {
                    totalAttempts: 1800,
                    correctAttempts: 1200,
                    incorrectAttempts: 600
                }
            }
        ]
    },
    {
        id: 3,
        icon: faFlask,
        quizTitle: "Basic Chemistry",
        quizCategory: "Science",
        difficulty: "Hard",
        questions: [
            {
                mainques: "What is the chemical symbol for gold?",
                choices: [
                    "Go",
                    "Au",
                    "Ag",
                    "Gd"
                ],
                correctAnswer: 1,
                answerResult: -1,
                statistics: {
                    totalAttempts: 500,
                    correctAttempts: 300,
                    incorrectAttempts: 200
                }
            },
            {
                mainques: "What is the pH level of pure water?",
                choices: [
                    "7",
                    "5",
                    "9",
                    "3"
                ],
                correctAnswer: 0,
                answerResult: -1,
                statistics: {
                    totalAttempts: 700,
                    correctAttempts: 450,
                    incorrectAttempts: 250
                }
            }
        ]
    },
    {
        id: 4,
        icon: faBook,
        quizTitle: "World History",
        quizCategory: "History",
        difficulty: "Medium",
        questions: [
            {
                mainques: "Which year did World War II end?",
                choices: [
                    "1941",
                    "1945",
                    "1939",
                    "1950"
                ],
                correctAnswer: 1,
                answerResult: -1,
                statistics: {
                    totalAttempts: 1500,
                    correctAttempts: 1000,
                    incorrectAttempts: 500
                }
            },
            {
                mainques: "Who was the first President of the United States?",
                choices: [
                    "Thomas Jefferson",
                    "John Adams",
                    "Abraham Lincoln",
                    "George Washington"
                ],
                correctAnswer: 3,
                answerResult: -1,
                statistics: {
                    totalAttempts: 1600,
                    correctAttempts: 1400,
                    incorrectAttempts: 200
                }
            }
        ]
    }
];
