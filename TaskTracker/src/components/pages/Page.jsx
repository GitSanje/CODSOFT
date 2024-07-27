import React, { useEffect, useState } from "react";
import NewTask from "../Layout/NewTask";
import Column from "../Layout/Column";
import {
  faPencilAlt,
  faClock,
  faFlag,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const [displayTask, setDisplayTask] = useState(false);
  const [colTask, setColTask] = useState("");


  const initialInputs = {
    name: "",
    heading: "",
    description: ""
  };
  const [newTask, setNewTask] = useState({})
  console.log("newTask", newTask, colTask)

  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      return {
        Backlog: savedTasks.Backlog || [],
        Prioritized: savedTasks.Prioritized || [],
        Doing: savedTasks.Doing || [],
        OnHold: savedTasks.OnHold || [],
      };
    }
    return {
      Backlog: [],
      Prioritized: [],
      Doing: [],
      OnHold: [],
    };
  });



  const handlecreateTask = (colType, objData) => {
   
    if(objData){
      const newObjectData = {...objData, colType:colType, taskName : `${colType}tasks${[colType].length + 1}`}
      setNewTask(newObjectData)
      console.log("handlecreateTask",newObjectData,colType)
    }

    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      if (updatedTasks.hasOwnProperty(colType)) {
        const len = updatedTasks[colType].length;

        updatedTasks[colType] = [
          ...updatedTasks[colType],
          `${colType}task${len + 1}`,
        ];
      }

      return updatedTasks;
    });
    
  };





  const saveTasks = () => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to local storage:", error);
    }
  };

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  // console.log(Prioritized);

  useEffect(() => {
    const storedDisplayTask = localStorage.getItem("displayTask");
    if (storedDisplayTask === "true") {
      setDisplayTask(true);
    }
  }, []);

  const toggle = (colType = null) => {
    const newDisplayTask = !displayTask;
    setDisplayTask(newDisplayTask);
    if (colType) {
      setColTask(colType + "_" + newDisplayTask);
    }

    localStorage.setItem("displayTask", newDisplayTask);
  };

  const removeTaskFromOtherColumns = (task, colName) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      Object.keys(updatedTasks).forEach((key) => {
        if (key !== colName) {
          updatedTasks[key] = updatedTasks[key].filter((t) => t !== task);
        }
      });

      return updatedTasks;
    });
  };
  const handleOnDrop = (colName) => (e) => {
    const task = e.dataTransfer.getData("text");

    if (task) {
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        updatedTasks[colName] = [
          ...updatedTasks[colName].filter((t) => t !== task),
          task,
        ];
        removeTaskFromOtherColumns(task, colName);
        return updatedTasks;
      });
    }
  };

  return (
    <>
      {displayTask && <NewTask fun={toggle} taskCol={colTask} handlecreateTask = {handlecreateTask} />}
      <div className="pt-16 px-8  h-screen ">
        <div className="grid grid-cols-4 gap-8 min-w-max">
          {Object.keys(tasks).map((colType) => (
            <Column
             islast= { colType ==="OnHold" ? true : false}
              key={colType}
              colType={colType}
              icon={
                colType === "Backlog"
                  ? faTasks
                  : colType === "Prioritized"
                  ? faFlag
                  : colType === "Doing"
                  ? faPencilAlt
                  : faClock
              }
              cardCount={tasks[colType].length}
              fun={toggle}
              handleOnDrop={handleOnDrop(colType)}
              task={tasks[colType]}
              inputObj={newTask && colType.toLowerCase() === newTask.colType ? newTask : null}

            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
