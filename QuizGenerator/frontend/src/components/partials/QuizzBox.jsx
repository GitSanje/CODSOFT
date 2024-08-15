import React from "react";
import QuizzCard from "./QuizzCard";
import Placeholder from "./Placeholder";

const QuizzBox = () => {
  const allQuizzes = [];
  return (
    <>
      <div
        className="poppins mx-12
    mt-10"
      >
     
        {allQuizzes.length === 0 ? (
          <Placeholder />
        ) : (
          <>
             <div className="text-xl font-bold">My Quizzes</div>
             <div className="mt-6 flex gap-4 flex-wrap">
            <QuizzCard />
            <QuizzCard />
            <QuizzCard />
            <QuizzCard />
          </div>
          </>
         
        )}
      </div>
    </>
  );
};

export default QuizzBox;
