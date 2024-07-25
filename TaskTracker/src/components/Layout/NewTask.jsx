import React, { useState } from "react";
import TaskInput from "../_partials/TaskInput";
import TaskTextArea from "../_partials/TaskTextArea";
import { motion, AnimatePresence } from "framer-motion";

const NewTask = ({fun}) => {


  return (
    <>
      <AnimatePresence>
      <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 100 }}
            transition={{ duration: 0.3 }}
            className={`   fixed  bottom-0 right-0 bg-white shadow-lg w-3/5 lg:w-1/3 z-50 mr-5 mb-5 transform duration-300 ease`}
          >

        <div
        >
          <button
            className="absolute -top-12 right-1 text-blue-600 hover:text-blue-400 focus:outline-none bg-white p-4 "
            aria-label="Close"
            onClick={fun}
          >
            <i className="fa-solid fa-xmark fa-lg"></i>
          </button>
          <div className="main  p-4 mr-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="fa-solid fa-pen-to-square fa-2xl"></i>
                <span className="text-black text-xl font-bold ml-2">
                  New Task
                </span>
              </div>
              <div className="text-gray-400">
                <i
                  className="fa-solid fa-ellipsis-h"
                  style={{ transform: "rotate(90deg)" }}
                ></i>
              </div>
            </div>
            <div className=" pt-7">
              <TaskInput
                heading="who is requesting?"
                label="Insert your name"
              />
            </div>

            <div className="pt-4">
              <TaskInput heading="What?" label="Briefly describe the task" />
            </div>
            <div className="py-4">
              <TaskTextArea
                heading="More Info"
                label="Provide further detail about about the task (this field is optional)"
              />
            </div>
          </div>

          <div className="bg-blue-500 p-4">
            <div className="text-white text-center font-semibold">
              Create New Task{" "}
              <span className="text-gray-400 text-md ">
                {" "}
                - or press ctrl + enter{" "}
              </span>
            </div>
          </div>
        </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default NewTask;
