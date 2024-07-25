import React, {useEffect, useState} from "react";
import NewTask from "../Layout/NewTask";
import Column from "../Layout/Column";
import { faPencilAlt, faClock, faFlag,faTasks } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
  const [displayTask, setDisplayTask] = useState(false);

  useEffect( () => {
    const storedDisplayTask = localStorage.getItem("displayTask");
      if(storedDisplayTask === "true"){
        setDisplayTask(true);
      }
  }, [])

   const toggle = () => {
    const newDisplayTask = !displayTask;
    setDisplayTask(newDisplayTask);
    localStorage.setItem('displayTask', newDisplayTask);
   }
   

  return (
    <>
     {displayTask && (
      <NewTask fun={toggle}/>
    )}
      <div className="pt-16 px-8  h-screen ">
        <div className="grid grid-cols-4 gap-8 min-w-max">
          <Column colType="Backlog" icon={faTasks} cardCount={1} fun={toggle}/>
          <Column colType="Prioritized" icon={faFlag} cardCount={1} fun={toggle}/>
          <Column colType="Doing" icon={faPencilAlt} cardCount={1} fun={toggle}/>
          <Column islast={true} colType="On hold" icon={faClock} cardCount={2} fun={toggle} />
        </div>
      </div>
    </>
  );
};

export default Page;
