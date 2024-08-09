import React, { useContext, useState } from "react";

import { UpdateTaskContext } from "../../../state/Tasks/UpdateTaskProvider";

import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TaskUpdateCard = ({ name, heading, dis, currCol,taskname }) => {
 
  
  return (
    <div className="relative w-full px-4 pb-60 ">
      <LeftCard name={name} heading={heading} dis={dis} />
      <RightCard colType={currCol}taskName={taskname} />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default TaskUpdateCard;
