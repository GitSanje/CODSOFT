import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { quizIcons } from "../../../assets/icons";
import useBuildQuizProvider from "../../../context/BuildQuizContext";


const QuizIconsCard = () => {
  const {handleIcon} = useBuildQuizProvider()
    
  return (
    <>
      <div className=" flex flex-wrap gap-2 shadow-lg border-2 border-gray-400 rounded-md p-4  size-80">
      
      {Object.entries(quizIcons).map(([key, icon], index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={icon}  
                    height={40}
                    width={40}
                    className="text-white p-2 rounded-md bg-indigo-500 cursor-pointer hover:bg-indigo-700"
                    onClick={() => handleIcon(icon)}
                />
            ))}
      </div>
    </>
  );
};

export default QuizIconsCard;
