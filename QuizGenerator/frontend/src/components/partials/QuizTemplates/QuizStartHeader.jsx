import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faCode } from "@fortawesome/free-solid-svg-icons";
import CustomeTimer from "../Timer/CustomeTimer";

export default function QuizStartHeader({ selectQuiz, time}) {
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
            <p className=" text-gray-500">
              {" "}
              {selectQuiz.questions ? selectQuiz.questions.length : 0} Questions
            </p>
          </div>
        </div>
        <CustomeTimer endTime={time} />  
        
      </div>
    </>
  );
}

