import React, { useContext, useEffect, useState } from "react";

import Model from "../../../Wrapper/Model";
import TaskDisplayProvider from "./TaskDisplayCombineProvider";
import TaskUpdateCard from "../TaskUpdate/TaskUpdateCard";
import { UpdateTaskContext } from "../../../state/Tasks/UpdateTaskProvider";
import PriorityLevel from "../TaskUpdate/PriorityLevel";
import { ToastContainer } from "react-toastify";
import { getDifferenceInDate } from "../../../util/getDifferencDate";

const TaskDisplay = ({ name, heading, description, taskname, currCol }) => {
 
  // use uniquekey for all the tasks, since same key allows to share the 
  // property across all components;


  //
  const uniqueKey = `isVisible-${taskname}`;
 
  const {phaseUpdated, isVisible,setIsVisible} = useContext(UpdateTaskContext)

  useEffect(() => {
    const visible = localStorage.getItem(uniqueKey) === "true";
    setIsVisible(visible);
    
  }, [uniqueKey]);

  

  const handleDragEnd = (e) => {
    e.target.style.visibility = "visible";
  };
  const handleOnDrag = (e, name) => {
    e.dataTransfer.setData("text", name);
    
    requestAnimationFrame(() => {
      e.target.style.visibility = "hidden";
    });
  };

  const handleOnClick = () => {

    setIsVisible(true);
    localStorage.setItem(uniqueKey, true);
  };
  const handleOnClose = () => {
    setIsVisible(false);
    localStorage.setItem(uniqueKey, false);
  };
  const endDate = new Date( phaseUpdated.dateTime.endDateTime);
  const dateDiff = getDifferenceInDate(phaseUpdated.dateTime.startDate, endDate)
  const monthDate = endDate.toLocaleString('default', { month: 'short' });
  const date = endDate.getDate();

  return (
    <>
   
        <div
          className="bg-white rounded-md border-2 shadow-sm hover:shadow-md cursor-pointer p-5  transition duration-300 ease-in-out"
          draggable
          onDragStart={(e) => {
            handleOnDrag(e, taskname);
          }}
          onDragEnd={handleDragEnd}
          onClick={handleOnClick}
        >

          <div className="flex flex-col space-y-2">
            {phaseUpdated && phaseUpdated.taskName ===taskname ? <PriorityLevel hoveredItem={phaseUpdated.clickItem} 
             label={false} className={false}/> : ""}

            <div className="text-black text-start text-md font-semibold ">
              {heading || "Develop New E-reader"}
            </div>
            <h3 className="text-gray-600 text-start text-sm font-medium ">
              {name || "Shirley Bennett "}
            </h3>
            <p className="text-gray-600 text-start text-sm break-words w-full max-w-72 ">
              {description ||
                " Re-design our current logo to a new updated version "}
            </p>
          </div>
          {phaseUpdated && phaseUpdated.taskName ===taskname ? 
             <div className="font-medium flex flex-row space-x-3 mt-4 items-center">
              <h2 className="px-3 py-1 bg-gray-400 text-white rounded">{monthDate}, {date}</h2>
          <p className="text-gray-500"> in {dateDiff} </p> 
          </div>
          : ""}
        </div>

        <Model isVisible={isVisible} onClose={handleOnClose}>
          {currCol === "Backlog" ? (
            <TaskUpdateCard name={name} heading={heading} dis={description} currCol={currCol} taskname={taskname}/>
          ) : (
            ""
          )}
        </Model>
       
        
    </>
  );
};

export default TaskDisplay;
