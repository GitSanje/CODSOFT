import React from 'react'

import {twMerge } from "tailwind-merge"

const Button = ({children, className='',...props}) => {
  return (
    <>
      <button 
      className={twMerge('btn px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md',className)}
      type='submit'
      {...props}
      
      > 
        {children}
      </button>
    </>
  )
}

export default Button
