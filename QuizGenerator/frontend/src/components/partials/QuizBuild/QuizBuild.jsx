import React, { useState } from 'react'
import QuizBuildNav from './QuizBuildNav'
import QuizBuildTitle from './QuizBuildTitle'
import QuizBuildQuestions from './QuizBuildQuestions'

const QuizBuild = () => {

  const [focusFirst, setFocusFirst ] = useState(true)

  const quizTitleProps = {
    focusProp : { focus: focusFirst, setFocusFirst}
  }
  const quizQuestionProps = {
    focusProp : { focus: !focusFirst, setFocusFirst}
  }
   return (
    <>
    <div className="">
    <QuizBuildNav/>
<QuizBuildTitle {...quizTitleProps}/>
<QuizBuildQuestions {...quizQuestionProps}/>
    </div>

    </>
  )
}

export default QuizBuild