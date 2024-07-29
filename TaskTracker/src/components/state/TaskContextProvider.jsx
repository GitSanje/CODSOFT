import { useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";

const TaskContextProvider = ({ children }) => {


  const initialInput = {
    name: "",
    heading: " ",
    description: "",
  };

  const [inputs, setInputs] = useState(() => {
    const savedInputs = localStorage.getItem("inputs");
    if (savedInputs) {
      const parsedInputs = JSON.parse(savedInputs);
      return Array.isArray(parsedInputs) ? parsedInputs : [initialInput];
    } else {
      return [initialInput];
    }
  });

  console.log(inputs, "inputs");

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

  const saveTasks = () => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("inputs", JSON.stringify(inputs));
    } catch (error) {
      console.error("Error saving tasks to local storage:", error);
    }
  };

  useEffect(() => {
    saveTasks();
  }, [tasks, inputs]);

  const handlecreateTask = (colType, objData) => {
    const taskName =
      tasks[colType] && tasks[colType].length > 0
        ? `${colType}task_${tasks[colType].length + 1}`
        : `${colType}task_1`;

    if (objData) {
      const newObjectData = {
        ...objData,
        colType: colType,
        taskName: taskName,
      };
      setInputs((prev) => {
        const updatedInputs = [...prev, newObjectData];
        return updatedInputs;
      });

      setTasks((prev) => {
        const updatedTasks = { ...prev };
        if (updatedTasks.hasOwnProperty(colType)) {
          updatedTasks[colType] = [...updatedTasks[colType], taskName];
        }

        return updatedTasks;
      });
    }
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
    console.log(task, colName);

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

  const allValues = {
    inputs,
    setInputs,
    handlecreateTask,
    tasks,
    setTasks,
    handleOnDrop,
    handlecreateTask,
    initialInput,
  };

  return (
    <>
      <TaskContext.Provider value={allValues}>
        {children}
        </TaskContext.Provider>
    </>
  );
};

export default TaskContextProvider;
