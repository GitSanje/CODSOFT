import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faClock,
  faFlag,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../../_partials/Dropdown";
import Button from "../../../_partials/Button";
import { UpdateTaskContext } from "../../../state/Tasks/UpdateTaskProvider";

import PriorityLevel from './PriorityLevel';
import DateTimeContent from './DateTimeContent';

import 'react-toastify/dist/ReactToastify.css';


const RightCard = ({colType,taskName}) => {

    const {
        hoveredItem,
        handleHover,
        handleLeave,
        handleDropdown,
        toggleDropdown,
        clickItem,
        dropdown,
        dateTime,
        handleSubmit,
        phaseUpdated,
        errors
        
      } = useContext(UpdateTaskContext);

      const items = [
        { label: "High", color: "bg-red-600" },
        { label: "Low", color: "bg-green-600" },
        { label: "Medium", color: "bg-blue-600" },
      ];
     
     
     console.log(phaseUpdated,'phaseUpdated',)

  return (
    <>
      <div className="bg-white pt-4 pb-3 pl-8 pr-16 absolute left-full -top-4 shadow-md w-full  rounded-md ml-4 ">
        <div className="">
          <p className="text-base text-gray-500">Current Phase</p>
          <h1 className="text-xl font-bold">
            {colType}{" "}
            <span className="text-sm text-green-700">
              <FontAwesomeIcon icon={faTasks} />
            </span>
          </h1>
        </div>

        <div className="">
          <p className="text-lg font-medium border-b-2 border-solid pb-4 pt-7">
            {" "}
            Fill out the fields below and move the card to the next phase
          </p>
        </div>

        <form onSubmit={(e) => handleSubmit(taskName,e)}>

      
        <div className="">
          <h3 className="text-lg font-semibold pt-4">Task Priority</h3>
          <p className="text-base text-gray-500 pb-7">
            Enter the priority related to this task
          </p>
          <div className=" relative pb-2 ">
            <i
              className="fa-solid fa-tag text-gray-500"
              style={{ transform: "rotate(45deg" }}
            ></i>

            <span
              className="text-base text-gray-500 border-b-2 border-dotted ml-2 hover:text-blue-400 hover:border-blue-400 cursor-pointer "
              onClick={toggleDropdown}
            >
              Add new label
            </span>
            {dropdown && (
              <Dropdown
                items={items}
                onHover={handleHover}
                onLeave={handleLeave}
                handleDropdown={handleDropdown}
              />
            )}

            {hoveredItem ? (
              <PriorityLevel hoveredItem={hoveredItem}/>
            ) : (
              clickItem && (
                <PriorityLevel hoveredItem={clickItem}/>
              )
            )}
             {errors.priority && (
                <p className="text-red-500 text-sm">{errors.priority}</p>
              )}
          </div>
        </div>   

      
       <DateTimeContent title={"Start Date"} dis={"Insert the exact date this task will began"} showTime={false} error={errors.startDate} dateType = "startDate"/>
       <DateTimeContent title={"End Date"} dis={"Insert the expected date to finish the task"} showTime={true} error={errors.endDate} dateType = "endDateTime" />
        
        <div className="flex items-center justify-center">
            <Button className="mt-4 px-7 w-full font-medium ">Save</Button>
        </div>
        

        </form>
      </div>
    </>
  )
}

export default RightCard