import React from 'react'

import {twMerge } from "tailwind-merge"

const Button = ({children, className,...props}) => {
    
  return (
    <>
      <button 
      className={twMerge(' bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700',className)}
   
      {...props}
      
      > 
        {children}
      </button>
    </>
  )
}

export default Button
