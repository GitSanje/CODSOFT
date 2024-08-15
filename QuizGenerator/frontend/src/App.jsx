import { useState } from 'react'
import './index.css'
import { Routes,Route } from 'react-router-dom'
import LoginSignup from './components/users/LoginSignup'
import QuizzCard from './components/partials/QuizzCard'
import QuizzBox from './components/partials/QuizzBox'
import Placeholder from './components/partials/Placeholder'
import QuestionBox from './components/partials/QuestionBox'
import QuizTemplate from './components/partials/QuizTemplate'

function App() {

  return (
    <>
     {/* <LoginSignup/> */}
     {/* <QuizzBox/> */}
     <QuizTemplate/>

    </>
  )
}

export default App
