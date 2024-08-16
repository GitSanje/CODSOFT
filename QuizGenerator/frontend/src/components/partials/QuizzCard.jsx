import React from "react";

import { faCode, faEllipsis, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import targetPng from '../../assets/target-16.png'
import { Link } from "react-router-dom";
import useGlobalContextProvider from "../../context/GlobalContext";


const successRate = (singleQuiz) => {
  let correctQus = 0;
  let totalAttemps = 0;
 

  singleQuiz.questions.forEach((ques) => {
    totalAttemps += ques.statistics.totalAttempts
    correctQus += ques.statistics.correctAttempts
  })

  return Math.ceil((correctQus/ totalAttemps)*100);
}

const QuizzCard = ({singleQuiz}) => {
 const {quizSelectObj} = useGlobalContextProvider()
 const { selectQuiz,setSelectQuiz} = quizSelectObj
  const { quizTitle, questions, icon} = singleQuiz
  const totalQuestions = questions.length;
  const globalSuccessRate = successRate(singleQuiz)


  return (
    <>
      <div className="rounded border-2 flex flex-col gap-2  border-gray-300 bg-white p-4">
        <div className="relative bg-indigo-600 w-full h-32 flex justify-center items-center rounded cursor-pointer">
        <FontAwesomeIcon
            className="text-white"
       
            icon={icon}
            style={{ width:"60px", height:"60px"}}
          />
          <div className="absolute top-1 right-3">
            <FontAwesomeIcon
              className="text-white"
              height={15}
              width={15}
              icon={faEllipsis}
            />
          </div>
         
        </div>
        <h4 className="font-bold">{quizTitle}</h4>
        <p className="text-sm  text-gray-500">{totalQuestions} Questions</p>
        <div className="flex gap-3">
          <div className="flex gap-1 items-center">
          {/* https://www.iconpacks.net/ */}
            <img src={targetPng} alt="" style={{ width: "20px", height: "20px" }} />
            <span className="text-sm text-gray-700"> Success rate {globalSuccessRate}%</span>
          </div>

          <Link className="rounded-full size-7 bg-indigo-600 flex items-center justify-center cursor-pointer"
          to='quzztemplate'>
            <FontAwesomeIcon
              className="text-white"
              height={16}
              width={16}
              icon={faPlay}
              onClick={() => setSelectQuiz(singleQuiz)}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuizzCard;
