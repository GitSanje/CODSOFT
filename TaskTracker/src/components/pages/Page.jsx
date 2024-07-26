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

  // const [Backlog, setBacklog] = useState([]);
  // const [Prioritized, setPrioritized] = useState([]);
  // const [Doing, setDoing] = useState([]);
  // const [onHold, setOnHold] = useState([]);

  const [tasks, setTasks] = useState( () => {
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

  console.log("tasks",tasks);

 
  const saveTasks = () => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to local storage:", error);
    }
  };

  // useEffect(() => {
  //   loadTasks();
  // }, []);


  useEffect(() => {
    saveTasks()
  }, [tasks])

  // console.log(Prioritized);

  // const getFirstWord = (taskName) => {
  //   return taskName.split("_").map((word) => word.charAt(0).toUperrCase());
  // };

  useEffect(() => {
    const storedDisplayTask = localStorage.getItem("displayTask");
    if (storedDisplayTask === "true") {
      setDisplayTask(true);
    }
  }, []);



  const toggle = () => {
    const newDisplayTask = !displayTask;
    setDisplayTask(newDisplayTask);
    localStorage.setItem("displayTask", newDisplayTask);
  };



 const removeTaskFromOtherColumns = (task, colName) => {
  setTasks((prevTasks) => {
    const updatedTasks = {...prevTasks};
    Object.keys(updatedTasks).forEach((key) => {
      if(key !== colName){
        updatedTasks[key] = updatedTasks[key].filter(t => t !== task);
      }
    })

    return updatedTasks;
  })

 }
  const handleOnDrop = (colName) => (e) => {
   
    const task = e.dataTransfer.getData("text");

    if(task) {

      setTasks((prevTasks) => {
        const updatedTasks = {...prevTasks};
        updatedTasks[colName] = [...updatedTasks[colName].filter( (t) => t !== task), task];
        removeTaskFromOtherColumns(task, colName);
        return updatedTasks;
      })
    }
  }




  return (
    <>
      {displayTask && <NewTask fun={toggle} />}
      <div className="pt-16 px-8  h-screen ">
        <div className="grid grid-cols-4 gap-8 min-w-max">

        {Object.keys(tasks).map((colType) => (
            <Column
              key={colType}
              colType={colType}
              icon={
                colType === "Backlog" ? faTasks :
                colType === "Prioritized" ? faFlag :
                colType === "Doing" ? faPencilAlt :
                faClock
              }
              cardCount={tasks[colType].length}
              fun={toggle}
              handleOnDrop={handleOnDrop(colType)}
              task={tasks[colType]}
            />
          ))}
         
        </div>
      </div>
    </>
  );
};

export default Page;


