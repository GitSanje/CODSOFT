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

  const [Backlog, setBacklog] = useState([]);
  const [Prioritized, setPrioritized] = useState([]);
  const [Doing, setDoing] = useState([]);
  const [onHold, setOnHold] = useState([]);

  console.log(Prioritized);

  const getFirstWord = (taskName) => {
    return taskName.split("_").map((word) => word.charAt(0).toUperrCase());
  };

  useEffect(() => {
    const storedDisplayTask = localStorage.getItem("displayTask");
    if (storedDisplayTask === "true") {
      setDisplayTask(true);
    }
  }, []);

  useEffect(() => {});

  const toggle = () => {
    const newDisplayTask = !displayTask;
    setDisplayTask(newDisplayTask);
    localStorage.setItem("displayTask", newDisplayTask);
  };

  const removeTaskFromOtherColumns = (task, currentColumn) => {
    const columnSetters = [setBacklog, setPrioritized, setDoing, setOnHold];
    columnSetters
      .filter((setter) => setter !== currentColumn)
      .forEach((setter) => {
        setter((prev) => prev.filter((t) => t !== task));
      });
  };

  const handleOnDrop = (columnSetter, task) => {
    columnSetter((prev) => prev.filter((t) => t !== task));
    columnSetter((prev) => [...prev, task]);
    removeTaskFromOtherColumns(task, columnSetter);
   
    
  };

  const handleOnDrops = (columnSetter) => (e) => {
    const task = e.dataTransfer.getData("text");
    if (task) {
      handleOnDrop(columnSetter, task);
    }
  };

  return (
    <>
      {displayTask && <NewTask fun={toggle} />}
      <div className="pt-16 px-8  h-screen ">
        <div className="grid grid-cols-4 gap-8 min-w-max">
          <Column
            colType="Backlog"
            icon={faTasks}
            cardCount={1}
            fun={toggle}
            handleOnDrop={handleOnDrops(setBacklog)}
            task={Backlog}
          />
          <Column
            colType="Prioritized"
            icon={faFlag}
            cardCount={1}
            fun={toggle}
            handleOnDrop={handleOnDrops(setPrioritized)}
            task={Prioritized}
          />
          <Column
            colType="Doing"
            icon={faPencilAlt}
            cardCount={1}
            fun={toggle}
            handleOnDrop={handleOnDrops(setDoing)}
            task={Doing}
          />
          <Column
            islast={true}
            colType="On hold"
            icon={faClock}
            cardCount={2}
            fun={toggle}
            handleOnDrop={handleOnDrops(setOnHold)}
            task={onHold}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
