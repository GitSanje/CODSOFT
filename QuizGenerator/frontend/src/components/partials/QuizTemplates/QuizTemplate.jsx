import React, { useState } from "react";
import QuestionBox from "./QuestionBox";

import Button from "../Button";
import useGlobalContextProvider from "../../../context/GlobalContext";

import { useParams } from "react-router-dom";

import { numToLetter } from "../../../util/conversion";
import QuizStartHeader from "./QuizStartHeader";

const QuizTemplate = () => {

  let { qzid, qsid } = useParams();
  qsid = parseInt(qsid);
  const id = qzid.split("_")[1];

  const { allQzz , quizzTemplateObj} = useGlobalContextProvider();
  const {handleSubmit,res,handleclick ,ansClick} = quizzTemplateObj
  const selectQuiz = allQzz[id - 1];
  const len = selectQuiz.questions.length;
  let timeFormatted = `00:${len < 10 ? '0'+len : len}:00`;
  console.log(timeFormatted);
  
  return (
    <>
      {selectQuiz && (
        <div className="mt-7 flex flex-col  lg:px-24">
          <QuizStartHeader selectQuiz={selectQuiz }time={timeFormatted} />

          <div className="ml-7 flex items-center justify-center lg:mx-32">
            <div className="m-9 w-9/12 ">
              <div className="mb-5 flex  justify-centern gap-4">
                <div className="flex items-center justify-center items-center rounded-md size-10 bg-indigo-500 text-white ">
                  {qsid + 1}
                </div>
                <p className="text-xl font-semibold ">
                  {selectQuiz.questions[qsid].mainques}
                </p>
              </div>

              <div className="flex flex-col  gap-4">
                {selectQuiz.questions[qsid].choices.map((qs, index) => (
                  <QuestionBox
                    key={index}
                    id={numToLetter(index + 1)}
                    content={qs}
                    handleclick={handleclick}
                    isClicked={ansClick === index}
                    normal={
                      res.incorrect === index || res.correct === index
                        ? false
                        : true
                    }
                    Qfalse={res.incorrect === index}
                    Qtrue={res.correct === index}
                  />
                ))}

                <div className=" mx-7  flex justify-center ">
                  <Button className="px-20" onClick={() => handleSubmit(qsid,id)}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizTemplate;
