
import Input from "../Input";
import Button from "../Button";
import useBuildQuizProvider from "../../../context/BuildQuizContext";

export default function Choices({ qIndex , singleQ}) {

    const { choices } = singleQ;
    const postition = ["First", "Second", "Third", "Fourth"];
    const {QuizChoiceObj}=useBuildQuizProvider()
    const { alphabets, addNewChoice, choiceOnChangeHandle, handleInputChange} = QuizChoiceObj;



    return (
      <div className=" flex flex-col gap-2  mt-3 p-2">
        <div className="flex items-center gap-4">
          <div className="text-lg">Choices</div>
  
          <div className="border border-gray-200 rounded-md p-2 w-full">
            {choices.map((singC, cIndex) => (
              <div className="flex gap-4 items-center mt-3" key={cIndex}>
                <span>{alphabets[cIndex]}: </span>
                <Input
                  value={singC}
                  className={"w-full"}
                  placeholder={`Add your ${postition[cIndex]} choice`}
                  onChange= {(e) =>choiceOnChangeHandle(qIndex,cIndex, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col mt-3">
            <div className="">
                <div className="flex gap-2 ">
                    Correct Answer: 
                    <Input
                       onChange={(e) => handleInputChange(qIndex, e.target.value, true)}
                      placeholder={`Add your correct choice`}/>
                </div>
            

            </div>
            <div className="flex justify-center">
            <Button className={"px-4"} onClick={() => addNewChoice(qIndex)}>
            Add a new choice
                  </Button>
            </div>
       
         
        </div>
      </div>
    );
  }
  