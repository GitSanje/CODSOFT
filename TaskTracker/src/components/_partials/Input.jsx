import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({className, classNameInput, classNameLabel, label, heading, ...props }) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      {heading && <h3 className="text-black text-base font-semibold">* {heading}</h3> }
      { label && <label htmlFor={label}  className= {twMerge("text-gray-800 text-sm pb-2", classNameLabel)}>{label}</label>}
      <input
        className={twMerge(
          'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500',
          classNameInput
        )}
       
        {...props}
      />
    </div>
  );
};

export default Input;
