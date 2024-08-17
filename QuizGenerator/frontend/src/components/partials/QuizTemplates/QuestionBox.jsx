import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from 'tailwind-merge';

const QuestionBox = ({
  id,
  content,
  handleclick,
  isClicked,
  normal,
  Qfalse = false,
  Qtrue = false,
}) => {

 
  const trueQ = "bg-green-600 text-white ";
  const normalQ ="border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white ";
  const falseQ = "bg-red-400";
  const className = twMerge(`ml-11 w-10/12 py-2 px-5 rounded-md cursor-pointer`, 
    isClicked ? "bg-indigo-500 text-white" : "",
    normal ? normalQ : "",  
    Qfalse ? falseQ : "",   
    Qtrue ? trueQ : ""
  );


  
  return (
    <>
      <div
  

         className = {className}
        onClick={() => handleclick(letterToNumber(id) -1)}
      >
        <div className="flex justify-between items-center">
          <div className="">
            {id} : {content}
          </div>

          {!normal ? Qtrue ? (
            <FontAwesomeIcon
              className="text-white"
              width={20}
              height={20}
              icon={faCheck}
            />
          ) : (
            <FontAwesomeIcon
              className="text-white"
              width={20}
              height={20}
              icon={faTimes}
            />
          ) : ""}
        </div>
      </div>
    </>
  );
};

export default QuestionBox;


function letterToNumber(letter) {
  const uppercaseLetter = letter.toUpperCase(); 
  const alphabetPosition = uppercaseLetter.charCodeAt(0) - 64;
  return alphabetPosition;
}