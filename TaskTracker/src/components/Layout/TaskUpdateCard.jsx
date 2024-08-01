import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faClock,
  faFlag,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../_partials/Dropdown";

const TaskUpdateCard = () => {
  const [hoveredItem, setHoveredItesm] = useState(null);

  const items = [
    { label: "High", color: "bg-red-600" },
    { label: "Low", color: "bg-green-600" },
    { label: "Medium", color: "bg-blue-600" },
  ];

  const handleHover = (item) => {
    setHoveredItesm(item);
  };
  const handleLeave = (item) => {
    setHoveredItesm(null);
  };
  console.log(hoveredItem);

  return (
    <div className="relative w-full px-4  pb-28">
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl text-blue-500 font-bold">Develop new Eraser</h1>
        <h5 className="text-base text-gray-500">
          Created by Sanjay Karki on Jul 30, 2020 8:49 PM
        </h5>
      </div>

      <div className="mt-4 ">
        <h3 className="text-lg font-medium pt-7 pb-4">Initial form</h3>
        <div className="flex flex-col space-y-4 bg-white p-7 rounded-md">
          <div>
            <h3 className="text-black text-base font-semibold">
              *Who is creating?
            </h3>
            <p className="text-base text-gray-500">Jeff Bezos</p>
          </div>
          <div>
            <h3 className="text-black text-base font-semibold">*What?</h3>
            <p className="text-base text-gray-500">Develop new Ereader</p>
          </div>
          <div>
            <h3 className="text-black text-base font-semibold">More Info</h3>
            <p className="text-base text-gray-500">
              Digital reading is a new trend we need to develop a new device
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 px-8 absolute left-full -top-4 shadow-md w-full h-full rounded-md ml-4 overflow-y">
        <p className="text-base text-gray-500">Current Phase</p>
        <h1 className="text-xl font-bold">
          Backlog{" "}
          <span className="text-sm text-green-700">
            <FontAwesomeIcon icon={faTasks} />
          </span>
        </h1>

        <p className="text-lg font-semibold border-b-2 border-solid pb-4 pt-7">
          {" "}
          Fill out the fields below and move the card to the next phase
        </p>
     
        <h3 className="text-lg font-semibold py-4">Task Priority</h3>
        <p className="text-base text-gray-500 ">
          Enter the priority related to this task
        </p>
        <div>
          <i
            className="fa-solid fa-tag text-gray-500"
            style={{ transform: "rotate(45deg" }}
          ></i>
        
          <span className="text-base text-gray-500 border-b-2 border-dotted ml-2 hover:text-blue-400 hover:border-blue-400 cursor-pointer">
            Add new label
          </span>
         




          <div>
            <Dropdown items={items} onHover={handleHover} onLeave={handleLeave} />
          </div>
          {hoveredItem && (
              <div className="flex items-center space-x-4">
                <div
                  className={`w-4 h-4 rounded-sm ${hoveredItem.color}`}
                ></div>
                <p>{hoveredItem.label}</p>
              </div>
            )}
          
            
         
        </div>
      </div>
    </div>
  );
};

export default TaskUpdateCard;
