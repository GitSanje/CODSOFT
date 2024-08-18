import React from 'react'
import Button from '../Button'
import useBuildQuizProvider from '../../../context/BuildQuizContext'

const QuizBuildNav = () => {

   const {saveQuiz} = useBuildQuizProvider()
  return (
    <>
<div className="my-12 mx-5 flex justify-between items-center">
    <div className="flex gap-2 items-center">
        <img src="" alt="" style={{width:"50px", height:"50px"}}/>
        <span className='text-2xl'>
            Quiz <span className='text-indigo-700 font-bold'> Builder</span>
        </span>

    </div>
    <Button
    className={"px-5"}
    onClick= {() => saveQuiz()}>
        Save
    </Button>

</div>
    </>
  )
}

export default QuizBuildNav