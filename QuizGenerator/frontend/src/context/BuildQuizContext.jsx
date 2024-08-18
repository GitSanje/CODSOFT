import {
  useRef,
  createRef,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const buildquizContext = createContext();

export const BuildQuizProvider = ({ children }) => {
  const initialQuiz = {
    id: 1,
    mainques: "",
    choices: ["", ""],
    correctAnswer: "",
  };
  const [questions, setQuizQuestions] = useState([initialQuiz]);

  const [focusFirst, setFocusFirst] = useState(true);

  const focusTitle = focusFirst;
  const focusQuestion = !focusFirst;

  const [quizTitle, setQuizTitle] = useState("");

  console.log(quizTitle, questions);
  const quizTitleRef = useRef(null);

  // allows to focus on last list
  const endOfListRef = useRef(null);
  // focus the input on new ques
  const textAreaRefs = useRef([createRef()]);

  const alphabets = ["A", "B", "C", "D"];

  // focus on title when first render
  useEffect(() => {
    if (focusTitle && quizTitleRef.current) {
      quizTitleRef.current.focus();
    }
  }, [focusTitle]);

  // put the focus on last question
  useEffect(() => {
    const lastQ = questions.length - 1;
    if (lastQ >= 0) {
      const lastArea = textAreaRefs.current[lastQ].current;
      if (lastArea && focusQuestion) {
        lastArea.focus();
      }
    }
  }, [questions.length, textAreaRefs.current]);

  // move scroll on the last question
  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [questions]);

  const handleTextInputChange = (v) => {
    setQuizTitle(v);
  };

  const addNewQuestion = () => {
    setFocusFirst(false);
    const lastQ = questions.length - 1;
    if (questions[lastQ].mainques.trim(" ").length === 0) {
      toast.error("Question input is empty", {
        autoClose: 2000,
      });
      return;
    }

    setQuizQuestions((prv) => [
      ...prv,
      {
        id: prv.length + 1,
        mainques: "",
        choices: ["", ""],
        correctAnswer: "",
      },
    ]);

    textAreaRefs.current.push(createRef());
  };
  const deleteQuestion = (singleQ) => {
    const questionsCpy = [...questions];
    const filterQ = questionsCpy.filter((ques) => singleQ.id !== ques.id);
    //(prev) => prev.filter((qus) => qus.id !== singleQ.id
    setQuizQuestions(filterQ);
  };

  const handleInputChange = (index, value, isCorrectAnswer = false) => {
    const updatedQuestions = questions.map((ques, i) => {
      if (index === i) {
        if (isCorrectAnswer) {
          return { ...ques, correctAnswer: value };
        } else {
          return { ...ques, mainques: value };
        }
      }

      return ques;
    });
    setQuizQuestions(updatedQuestions);
  };

  const addNewChoice = (qIndex) => {
    const copyQ = [...questions];

    const lastChoiceP = copyQ[qIndex].choices.length;
    if (lastChoiceP < 4) {
      //   const newChoice = `${alphabets[lastChoiceP]}`;
      copyQ[qIndex].choices.push("");
      setQuizQuestions(copyQ);
    }
  };

  const choiceOnChangeHandle = (qIndex, cIndex, singC) => {
    const updateQues = [...questions];
    updateQues[qIndex].choices[cIndex] = singC;

    setQuizQuestions(updateQues);
  };
  

  const saveQuiz = async () => {
  
    const response = await fetch("http://localhost:3500/quiz/addNewQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({quizTitle, questions }),
      });
      
      if (response.ok) {
        const result = await response.json();
        toast.success(result.message, {
          autoClose: 2000,  
        });
      } else {
        const errorResult = await response.json();
        toast.error(errorResult.message, {
          autoClose: 2000,
        });
      }
   
  };

  const QuiztitleObj = { quizTitle, quizTitleRef, handleTextInputChange };
  const QuizQuesObj = {
    questions,
    addNewQuestion,
    deleteQuestion,
    handleInputChange,
    endOfListRef,
    setQuizQuestions,
    textAreaRefs,
  };
  const QuizChoiceObj = {
    alphabets,
    addNewChoice,
    choiceOnChangeHandle,
    handleInputChange,
  };

  return (
    <buildquizContext.Provider
      value={{
        QuiztitleObj,
        QuizQuesObj,
        QuizChoiceObj,
        saveQuiz
      }}
    >
      {children}
    </buildquizContext.Provider>
  );
};

export default function useBuildQuizProvider() {
  return useContext(buildquizContext);
}
