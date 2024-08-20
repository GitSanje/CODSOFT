
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useBuildQuizProvider from '../../../context/BuildQuizContext'
import QuizIconsCard from './QuizIconsCard'


const QuizBuildTitle = () => {
    const { QuiztitleObj, currIcon, handleToggle, toogleIconcard} = useBuildQuizProvider()
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
       <div className="">
       <FontAwesomeIcon
        icon={currIcon}
        height={40}
        width={40}
        className='text-white p-2 rounded-md bg-indigo-700 cursor-pointer'
        onClick={handleToggle}/>
        {
          toogleIconcard && (
            <div className="absolute z-50 bg-white right-24 ">
            <QuizIconsCard/>
    
            </div>
          )
        }
       

       </div>
       

       
    
    </div>

    </>
  )
}

export default QuizBuildTitle



