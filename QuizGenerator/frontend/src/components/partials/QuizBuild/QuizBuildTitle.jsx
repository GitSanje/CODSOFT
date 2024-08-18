import React, { useEffect, useRef, useState } from 'react'
import Input from '../Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import useBuildQuizProvider from '../../../context/BuildQuizContext'


const QuizBuildTitle = () => {
    const { QuiztitleObj} = useBuildQuizProvider()
    const { quizTitleRef, quizTitle, handleTextInputChange }= QuiztitleObj
 
  return (
    <>
    <div className="m-5 p-3 flex justify-between items-center border border-indigo-700 rounded-md">
        <div className="flex gap-2">
            <div className="flex gap-2  ">
                <div className="bg-indigo-700 px-4 py-1 rounded-md text-white">
                    1
                </div>
               <span className='font-bold mr-7'> Quiz Name: </span>
            </div>

            <input
            onChange= {(e) => {
              handleTextInputChange(e.target.value)
            }}
            value ={quizTitle}
            ref= {quizTitleRef}
            placeholder="Enter the Name of the quiz ..."
            className= 'w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
            />
  
        </div>
        <FontAwesomeIcon
        icon={faCode}
        height={40}
        width={40}
        className='text-white p-2 rounded-md bg-indigo-700 cursor-pointer'/>


    
    </div>

    </>
  )
}

export default QuizBuildTitle



