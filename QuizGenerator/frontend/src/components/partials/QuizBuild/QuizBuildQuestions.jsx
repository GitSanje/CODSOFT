
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Choices from "./Choices";
import SingleQuestion from "./SingleQuestion";
import useBuildQuizProvider from "../../../context/BuildQuizContext";




const QuizBuildQuestions = () => {
 const {QuizQuesObj} = useBuildQuizProvider()

  const {questions,addNewQuestion,deleteQuestion,handleInputChange,endOfListRef,textAreaRefs} = QuizQuesObj

  return (
    <>
      <div className="p-3 m-6 flex justify-between border border-indigo-700 rounded-md">
        <div className="flex gap-2 flex-col w-full">
          <div className="flex gap-2 items-center">
            <div className="bg-indigo-700 px-4 py-1 rounded-md text-white">
              2
            </div>
            <span className="font-bold"> Quiz Questions: </span>

            <div className="flex"></div>
          </div>

          {questions.map((singleQ, index) => (
            <div
              ref={questions.length - 1 === index ? endOfListRef : null}
              className="relative border ml-5 p-4 mt-4 border-indigo-500
                border-opacity-50 rounded-md"
              key={index}
            >
              <SingleQuestion
                questionIndex={index}
                value={singleQ.mainques}
                ref={textAreaRefs.current[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />

              <Choices
                qIndex={index}
                singleQ={singleQ}
               
              />
             

              {index !== 0 && (
                <FontAwesomeIcon
                  icon={faXmark}
                  width={20}
                  height={20}
                  className="text-red-600 absolute top-1 right-0 cursor-pointer"
                  onClick={() => {
                    deleteQuestion(singleQ);
                  }}
                />
              )}
            </div>
          ))}

          <div className="w-full flex justify-center mt-3">
            <Button onClick={() => addNewQuestion()} className={"px-2"}>
              Add a new Question
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizBuildQuestions;

