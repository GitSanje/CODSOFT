import React, { useContext, useState } from "react";
import TaskUpdateCard from "../../TaskUpdateCard";
import Model from "../../../Wrapper/Model";
import TaskDisplayProvider from "./TaskDisplayProvider";

const TaskDisplay = ({ name, heading, description, taskname, currCol }) => {
  const [isVisible, setIsVisible] = useState(false);

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
  };
  const handleOnClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <TaskDisplayProvider>
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
        </div>

        <Model isVisible={isVisible} onClose={handleOnClose}>
          {currCol === "Backlog" ? (
            <TaskUpdateCard name={name} heading={heading} dis={description} />
          ) : (
            ""
          )}
        </Model>
      </TaskDisplayProvider>
    </>
  );
};

export default TaskDisplay;
