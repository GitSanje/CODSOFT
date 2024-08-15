import React from 'react'

const QuestionBox = ({id, content}) => {
  return (
    <>

    <div className="ml-11 w-10/12 py-2 px-5 border-2 border-indigo-500 rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white ">
     {id} : {content}
    </div>

    </>
  )
}

export default QuestionBox