import { useContext, useState, createContext, useEffect } from "react";
import { quizzesData } from "../assets/Quizzdata";

const globalContext = createContext();

export function ContextProvider({children}){


    const [allQzz, setAllQzz] = useState(quizzesData)
    const [selectQuiz, setSelectQuiz] = useState(null)


    // useEffect(()=> {
    //       setAllQzz(quizzesData)
    // }, [])

    return(
        <>
        <globalContext.Provider value={{allQzz,setAllQzz,
            quizSelectObj: {selectQuiz, setSelectQuiz}
        }}>
            {children}
        </globalContext.Provider>
        </>
    );

}

export default function useGlobalContextProvider(){
    return useContext(globalContext);
}



