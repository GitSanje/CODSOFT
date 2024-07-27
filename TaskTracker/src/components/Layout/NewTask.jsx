import React, { useState } from "react";
import TaskInput from "../_partials/TaskInput";
import TaskTextArea from "../_partials/TaskTextArea";
import { motion, AnimatePresence } from "framer-motion";
import { stripWords } from "../util/stripWord";

const NewTask = ({fun, taskCol, handlecreateTask}) => {


  const colV = stripWords(taskCol);
  console.log(taskCol,colV[0])
  const initialInputs = {
    name: "",
    heading: "",
    description: ""
  };
  const [inputs, setInputs] = useState(initialInputs);
  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    window.alert("task created")
    
    handlecreateTask(colV[0], inputs);
    setInputs(initialInputs);
    
   
  };

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
          <div>
            <button
              className="absolute -top-12 right-1 text-blue-600 hover:text-blue-400 focus:outline-none bg-white p-4 "
              aria-label="Close"
              onClick={()=>fun()}
            >
              <i className="fa-solid fa-xmark fa-lg"></i>
            </button>
            <form onSubmit={ handleSubmit}>
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
                        name="name"
                        value={inputs.name}
                        onChange={handleInput}
                      />
                    </div>

                    <div className="pt-4">
                      <TaskInput
                        heading="What?"
                        label="Briefly describe the task"
                        name="heading"
                        value={inputs.heading}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="py-4">
                      <TaskTextArea
                        heading="More Info"
                        label="Provide further detail about about the task (this field is optional)"
                        name="description"
                        onChange={handleInput}
                        value={inputs.description}
                      />
                    </div>
                
                </div>

              <div className="bg-blue-500 p-4 text-center">
                <button
                type="submit"
                 className="text-white  font-semibold">

                  Create New Task{" "}
                  <span className="text-gray-400 text-md ">
                    {" "}
                    - or press ctrl + enter{" "}
                  </span>
                </button>
              </div>
            </form>
            
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default NewTask;
