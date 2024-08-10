

import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({className, classNameInput, classNameLabel, label,  ...props }) => {

  const input_field ='changePlaceholder form-control w-full px-3 py-2 border rounded-lg focus:border-indigo-500 focus:outline-none ';
  return (
    <div className={twMerge("mb-4 form-outline", className)}>
      
      <input
        className={twMerge(
          input_field,
          classNameInput
        )}
       
        {...props}
      />
      { label && <label htmlFor={label}  className= {twMerge("block text-gray-500 label", classNameLabel)}>{label}</label>}
    </div>
  );
};

export default Input;