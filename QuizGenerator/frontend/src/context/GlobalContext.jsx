import { useContext, useState, createContext, useEffect } from "react";
import { quizzesData } from "../assets/Quizzdata";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


const globalContext = createContext();

export function ContextProvider({ children }) {


  const [allQzz, setAllQzz] = useState(quizzesData);
  const [ansClick, setAnsClick] = useState(null);
  const [res, setRes] = useState({
    correct: null,
    incorrect: null,
  });

  const navigate = useNavigate();

  const handleSubmit = (qsid, id) => {
    const selectQuiz = allQzz[id - 1];
    if (ansClick === null) {
      toast.info("Please click any item before submit!", {
        autoClose: 2000,
      });
      return;
    }
    const quiz = selectQuiz.questions[qsid];
    quiz.statistics.totalAttempts += 1;
    const trueQues = quiz.correctAnswer;
    const falseQues = ansClick;

    if (ansClick === trueQues) {
      quiz.statistics.correctAttempts += 1;
      setRes({
        correct: trueQues,
        incorrect: "",
      });

      toast.success("Wow hurray! you got it, Go for next question", {
        autoClose: 2000,
      });
    } else {
      quiz.statistics.incorrectAttempts += 1;
      setRes({
        correct: trueQues,
        incorrect: falseQues,
      });

      toast.error("Oops! That answer was incorrect. Give it another try!", {
        autoClose: 2000,
      });
    }

    setTimeout(() => {

      if (qsid >= selectQuiz.questions.length - 1) {
        navigate(`/`);
        setRes({
          correct: null,
          incorrect: null,
        });
        setAnsClick(null);
      } else {
        navigate(`/quzztemplate/quiz_${id}/${qsid + 1}`);
        setRes({
          correct: null,
          incorrect: null,
        });
        setAnsClick(null);
      }
    }, 3000);
  };

  const handleclick = (id) => {
    setAnsClick(id);
  };

   const quizzTemplateObj = {handleSubmit,res,handleclick,ansClick }

  return (
    <>
      <globalContext.Provider
        value={{
          allQzz,
          setAllQzz,
          quizzTemplateObj
        }}
      >
        {children}
      </globalContext.Provider>
    </>
  );
}

export default function useGlobalContextProvider() {
  return useContext(globalContext);
}
