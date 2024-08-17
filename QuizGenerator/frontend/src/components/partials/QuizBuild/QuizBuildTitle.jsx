import React from 'react'
import Input from '../Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const QuizBuildTitle = () => {
  return (
    <>
    <div className="m-5 p-3 flex justify-between items-center border border-indigo-700 rounded-md">
        <div className="flex gap-2">
            <div className="flex gap-2 items-center">
                <div className="bg-indigo-700 px-4 py-1 rounded-md text-white">
                    1
                </div>
               <span className='font-bold'> Quiz Name: </span>
            </div>

            <Input
            placeholder=" Enter the Name of the quiz ..."
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