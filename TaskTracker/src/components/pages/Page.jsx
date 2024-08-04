import React, { useEffect, useState, useContext } from "react";
import NewTask from "../Layout/NewTask";

import Column from"../Layout/Column/Column";

import {
  faPencilAlt,
  faClock,
  faFlag,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { TaskContext } from "../state/Tasks/TaskContext";

const Page = () => {
  const [displayTask, setDisplayTask] = useState(false);
  const [colTask, setColTask] = useState("");
  const { tasks } = useContext(TaskContext);

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

  const toggle = (colType) => {
    const newDisplayTask = !displayTask;
    setDisplayTask(newDisplayTask);
    if (colType) {
      setColTask(colType);
    }

    localStorage.setItem("displayTask", newDisplayTask);
  };

  return (
    <>
      <div className="pt-16 px-8  h-screen ">
        <div className="grid grid-cols-4 gap-8 min-w-max">
          {Object.keys(tasks).map((colType) => (
            <Column
              islast={colType === "OnHold" ? true : false}
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

              // inputObj={newTask && colType.toLowerCase() === newTask.colType ? newTask : null}
            />
          ))}
        </div>
      </div>
      {displayTask && <NewTask fun={toggle} taskCol={colTask} />}
    </>
  );
};

export default Page;
