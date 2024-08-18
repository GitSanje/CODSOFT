import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../Input";

const QuizBuildQuestions = ({ focusProp }) => {
  const { focus, setFocusFirst } = focusProp;

  const [quizQuestions, setQuizQuestions] = useState([
    { id: 1, mainQuestion: "", choices: ["A.", "B."] },
  ]);

  // allows to focus on last list
  const endOfListRef = useRef(null);
  // focus the input on new ques
  const textAreaRefs = useRef([createRef()]);

  const addNewQuestion = () => {
    setFocusFirst(false);
    const lastQ = quizQuestions.length - 1;
    if (quizQuestions[lastQ].mainQuestion.trim(" ").length === 0) {
      toast.error("Question input is empty", {
        autoClose: 2000,
      });
      return;
    }

    setQuizQuestions((prv) => [
      ...prv,
      { id: prv.length + 1, mainQuestion: "" },
    ]);

    textAreaRefs.current.push(createRef());
  };
  const deleteQuestion = (singleQ) => {
    const quizQuestionsCpy = [...quizQuestions];
    const filterQ = quizQuestionsCpy.filter((ques) => singleQ.id !== ques.id);
    //(prev) => prev.filter((qus) => qus.id !== singleQ.id
    setQuizQuestions(filterQ);
  };

  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [quizQuestions]);

  const handleInputChange = (index, text) => {
    const updatedQuestions = quizQuestions.map((ques, i) => {
      if (index === i) {
        return { ...ques, mainQuestion: text };
      }
      return ques;
    });
    setQuizQuestions(updatedQuestions);
  };

  useEffect(() => {
    const lastQ = quizQuestions.length - 1;
    if (lastQ >= 0) {
      const lastArea = textAreaRefs.current[lastQ].current;
      if (lastArea && focus) {
        lastArea.focus();
      }
    }
  }, [quizQuestions.length, textAreaRefs.current]);

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

          {quizQuestions.map((singleQ, index) => (
            <div
              ref={quizQuestions.length - 1 === index ? endOfListRef : null}
              className="relative border ml-5 p-4 mt-4 border-indigo-500
                border-opacity-50 rounded-md"
              key={index}
            >
              <SingleQuestion
                questionIndex={index}
                value={singleQ.mainQuestion}
                ref={textAreaRefs.current[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />

              <Choices
                qIndex={index}
                singleQ={singleQ}
                quizQ={quizQuestions}
                setQuizQuestions={setQuizQuestions}
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

const SingleQuestion = forwardRef(({ questionIndex, value, onChange }, ref) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <div className="flex gap-2 border-gray-200">
          <span>Questions</span>
          <span>{questionIndex + 1}</span>
        </div>
        <textarea
          className="border border-gray-200 rounded-md p-2 ml-3
                w-full outline-none resize-none"
          placeholder="Your Question here ..."
          value={value}
          onChange={onChange}
          ref={ref}
        ></textarea>
      </div>
    </div>
  );
});

function Choices({ qIndex, singleQ, quizQ, setQuizQuestions }) {
  const { choices } = singleQ;
  const alphabets = ["A", "B", "C", "D"];
  const postition = ["First", "Second", "Third", "Fourth"];

  const addNewChoice = () => {
    const copyQ = [...quizQ];
    console.log(copyQ);

    const lastChoiceP = copyQ[qIndex].choices.length;
    if (lastChoiceP < 4) {
      const newChoice = `${alphabets[lastChoiceP]}`;
      copyQ[qIndex].choices.push(newChoice);
      setQuizQuestions(copyQ);
    }
  };
  return (
    <div className=" flex flex-col gap-2  mt-3 p-2">
      <div className="flex items-center gap-4">
        <div className="text-lg">Choices</div>

        <div className="border border-gray-200 rounded-md p-2 w-full">
          {choices.map((singC, cIndex) => (
            <div className="flex gap-2 items-center mt-3" key={cIndex}>
              <span>{alphabets[cIndex]} </span>
              <Input
                className={"w-full"}
                placeholder={`Add your ${postition[cIndex]} choice`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-3">
        <Button className={"px-4"} onClick={() => addNewChoice()}>
          Add a new choice
        </Button>
      </div>
    </div>
  );
}
