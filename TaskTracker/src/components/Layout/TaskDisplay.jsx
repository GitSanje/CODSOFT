import React, { useContext } from 'react'
import { TaskContext } from '../state/TaskContext';

const TaskDisplay = ({ taskname }) => {

  
  const {inputs} = useContext(TaskContext);

  const handleDragEnd = (e) => {
    
    e.target.style.visibility = 'visible';

  };
  const handleOnDrag = (e, name) => {
      e.dataTransfer.setData("text", name);
    console.log(name);
      requestAnimationFrame(() => {
        e.target.style.visibility = "hidden";
      });
  };

  
 
  return (
    <>
   

    <div className="bg-white rounded-md border-2 shadow-sm hover:shadow-md cursor-pointer p-5  transition duration-300 ease-in-out"
    draggable
    onDragStart={(e) => {
      handleOnDrag(e, taskname)
      
    }}
     onDragEnd={handleDragEnd}
    >
      
      <div className="flex flex-col space-y-2">
        
        <div className="text-black text-start text-md font-semibold ">
         { inputs[inputs.length - 1].heading || "Develop New E-reader"}
      </div>
      <h3 className="text-gray-600 text-start text-sm font-medium ">
      { inputs[inputs.length - 1].name || "Shirley Bennett "}
      </h3>
      <p className="text-gray-600 text-start text-sm break-words w-full max-w-72 ">
      {inputs[inputs.length - 1].description || " Re-design our current logo to a new updated version "}
      </p>

      </div>
    </div>
      
    </>
  )
}

export default TaskDisplay
