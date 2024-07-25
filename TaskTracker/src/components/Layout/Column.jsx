import React from 'react';
import TaskDisplay from './TaskDisplay';

const Column = ({ islast = false }) => {
  return (
    <div className="relative">
      <div
        className="absolute -inset-y-12 right-1 flex items-center justify-center text-white bg-blue-500 rounded-full cursor-pointer"
        style={{ width: "30px", height: "30px" }}
      >
        <i className="fa-solid fa-plus"></i>
      </div>
      <TaskDisplay />
      {!islast && (
        <div className="absolute inset-y-0 -right-4 w-px bg-gray-600 h-screen" style={{ width: "0.5px" }}></div>
      )}
    </div>
  );
};

export default Column;
