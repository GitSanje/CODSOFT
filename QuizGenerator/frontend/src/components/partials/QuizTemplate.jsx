import React, { useState } from "react";
import QuestionBox from "./QuestionBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faCode } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import useGlobalContextProvider from "../../context/GlobalContext";
const QuizTemplate = () => {

  const {allQzz, quizSelectObj} = useGlobalContextProvider()
  const { selectQuiz} = quizSelectObj

  const [ currIdx, setCurrIdx] = useState(0)
   const [ansClick, setAnsClick] = useState(null)
  //  const [normal, setNormal] = useState(true)
   const [res, setRes] = useState({
    correct: null,
    incorrect: null
   })

   
  console.log(res,ansClick);
  

  
   const handleSubmit = () => {
    if(ansClick === null){
      return;
    }
    const quiz = selectQuiz.questions[currIdx]
    quiz.statistics.totalAttempts +=1;
    const trueQues = quiz.correctAnswer;
    const falseQues =ansClick;

    
      if( ansClick === trueQues){
       
        quiz.statistics.correctAttempts +=1;
        setRes({
          correct: trueQues,
          incorrect: ""
        })
      }
      else{
        quiz.statistics.incorrectAttempts +=1;
        setRes({
          correct: trueQues,
          incorrect: falseQues
        })
      }

      
   }

    const handleclick = (id) => {
      setAnsClick(id);
    };
   

  function moveToTheNextQuestion(){
    if(  currIdx === selectQuiz.questions.length - 1) {
      return;
    }
    setCurrIdx((curr) => curr +1);
  }
   
  return (
    <>{
      selectQuiz && (
        <div className="mt-7 flex flex-col  lg:px-24">
        <QuizStartHeader selectQuiz={selectQuiz} />

        <div className="ml-7 flex items-center justify-center lg:mx-32">
          <div className="m-9 w-9/12 ">
            <div className="mb-5 flex  justify-centern gap-4">
              <div className="flex items-center justify-center items-center rounded-md size-10 bg-indigo-500 text-white ">
              {currIdx +1}
              </div>
              <p className="text-xl font-semibold ">
                {selectQuiz.questions[currIdx].mainques}
              </p>
            </div>

            <div className="flex flex-col  gap-4">
              {selectQuiz.questions[currIdx].choices.map((qs, index) => (
                <QuestionBox key={index} 
                id={numToLetter(index+1)} 
                content={qs}
                handleclick={handleclick}
                isClicked = {ansClick === index}
                normal={res.incorrect === index || res.correct === index ? false : true}
                Qfalse={res.incorrect === index}
                Qtrue={res.correct === index}
                
                />
              ))}
              <div className=" mx-7  flex justify-center ">
                <Button className="px-20"
                onClick = {
                  () => handleSubmit()
                }
                >Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
     
    </>
  );
};

function numToLetter(num) {
  return String.fromCharCode(64 + num);
}

function QuizStartHeader({selectQuiz}) {

  return (
    <>
      <div className="mx-12 flex justify-between">
        <div className="flex gap-2 ">
          <div className="size-12 flex items-center bg-indigo-500 rounded-md">
            <FontAwesomeIcon
              className="text-white"
              height={80}
              width={80}
              icon={selectQuiz.icon}
            />
          </div>

          <div className="">
            <h2 className="font-bold text-xl"> {selectQuiz.quizTitle}</h2>
            <p className=" text-gray-500"> {selectQuiz.questions ? selectQuiz.questions.length: 0  } Questions</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            className="text-indigo-600"
            width={20}
            height={20}
            icon={faStopwatch}
          />
          <span> 00:00:29</span>
        </div>
      </div>
    </>
  );
}

export default QuizTemplate;
