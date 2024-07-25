import React from 'react';
import { twMerge } from 'tailwind-merge';

const TaskTextArea = ({ className, label, heading, ...props }) => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-black text-base font-semibold">{heading}</h3>
      <label className="text-gray-700 text-sm pb-2">{label}</label>
      <textarea
        className={twMerge(
          'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none',
          className
        )}
        style={{ color: "#6F83CB" }}
        {...props}
      />
    </div>
  );
};

export default TaskTextArea;
