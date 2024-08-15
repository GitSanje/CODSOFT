import React from "react";
import QuestionBox from "./QuestionBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faCode } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
const QuizTemplate = () => {
  const ques = [
    { id: "A", content: "string string" },
    { id: "A", content: "string string" },
    { id: "A", content: "string string" },
  ];
  return (
    <>
      <div className="mt-7 flex flex-col  lg:px-24">
        <QuizStartHeader />

        <div className="ml-7 flex items-center justify-center lg:mx-32">
          <div className="m-9 w-9/12 ">
            <div className="mb-5 flex  justify-centern gap-4">
              <div className="flex items-center justify-center items-center rounded-md size-10 bg-indigo-500 ">
                1
              </div>
              <p className="text-xl font-semibold ">
                what does the type of operator in js reutrn
              </p>
            </div>

            <div className="flex flex-col  gap-4">
              {ques.map((qs, index) => (
                <QuestionBox key={index} id={qs.id} content={qs.content} />
              ))}
              <div className=" mx-7  flex justify-center ">
                <Button className="px-20">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function QuizStartHeader() {
  return (
    <>
      <div className="mx-12 flex justify-between">
        <div className="flex gap-2 ">
          <div className="size-12 flex items-center bg-indigo-500 rounded-md">
            <FontAwesomeIcon
              className="text-white"
              height={80}
              width={80}
              icon={faCode}
            />
          </div>

          <div className="">
            <h2 className="font-bold text-xl"> JavaScript Quiz</h2>
            <p className=" text-gray-500"> 20 Quiestion</p>
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
