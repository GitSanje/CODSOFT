import React from 'react'
import { twMerge } from 'tailwind-merge'

const Input = ({className, ...props}) => {
  return (
    <>
    <input 
     className={twMerge("px-7 py-3 rounded text-white  outline-none bg-gray-700 focus:bg-gray-600", className)}
     {...props}
    />
      
    </>
  )
}

export default Input
