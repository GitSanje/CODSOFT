import React from "react";
import QuizzCard from "./QuizzCard";
import Placeholder from "./Placeholder";
import useGlobalContextProvider from "../../context/GlobalContext";


const QuizzBox = () => {
  
  const {allQzz} = useGlobalContextProvider()

  return (
    <>
      <div
        className=" mx-12
    mt-10"
      >
     
        {allQzz.length === 0 ? (
          <Placeholder />
        ) : (
          <>
             <div className="text-xl font-bold">My Quizzes</div>
             <div className="mt-6 flex gap-4 flex-wrap  mb-12">
           {allQzz.map((singleQuiz, index) => 
                <QuizzCard key={index}  singleQuiz = {singleQuiz}/>
           )}
            
          </div>
          </>
         
        )}
      </div>
    </>
  );
};

export default QuizzBox;
