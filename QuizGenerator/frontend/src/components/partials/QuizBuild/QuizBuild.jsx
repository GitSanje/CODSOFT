import React, { useState } from "react";
import QuizBuildNav from "./QuizBuildNav";
import QuizBuildTitle from "./QuizBuildTitle";
import QuizBuildQuestions from "./QuizBuildQuestions";
import { BuildQuizProvider } from "../../../context/BuildQuizContext";

const QuizBuild = () => {
  return (
    <>
      <div className="">
        <BuildQuizProvider>
          <QuizBuildNav />
          <QuizBuildTitle />
          <QuizBuildQuestions />
        </BuildQuizProvider>
      </div>
    </>
  );
};

export default QuizBuild;
