import { useState } from "react";

import "./App.css";
import TaskDisplay from "./components/Layout/TaskDisplay";

function App() {
  return (
    <>
      
      <div className="pt-16 px-8 grid grid-cols-4 gap-4 relative">
        
  <div className="relative">
  <div
        className="absolute -inset-y-12 right-1 flex items-center justify-center text-white bg-sky-600 rounded-full cursor-pointer "
        style={{ width: "30px", height: "30px" }}
      >
        <i className="fa-solid fa-plus fa-lg"></i>
      </div>
    <TaskDisplay />
    <div className="absolute inset-y-0 -right-2 w-px bg-gray-600 h-screen" style={{ width:"0.5px"}}></div>
  </div>
  <div className="relative">
  <div
        className="absolute -inset-y-12 right-1 flex items-center justify-center text-white bg-sky-600 rounded-full cursor-pointer "
        style={{ width: "30px", height: "30px" }}
      >
        <i className="fa-solid fa-plus fa-lg"></i>
      </div>
    <TaskDisplay />
    <div className="absolute inset-y-0 -right-2 w-px bg-gray-600 h-screen" style={{ width:"0.5px"}}></div>
  </div>
  <div className="relative">
  <div
        className="absolute -inset-y-12 right-1 flex items-center justify-center text-white bg-sky-600 rounded-full cursor-pointer "
        style={{ width: "30px", height: "30px" }}
      >
        <i className="fa-solid fa-plus fa-lg"></i>
      </div>
    <TaskDisplay />
    <div className="absolute inset-y-0 -right-2 w-px bg-gray-600 h-screen" style={{ width:"0.5px"}}></div>
  </div>
  <div className="relative">
    
    <TaskDisplay />
  </div>
</div>



   

    </>
  );
}

export default App;
