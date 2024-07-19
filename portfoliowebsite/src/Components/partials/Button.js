import React from 'react'

import {twMerge } from "tailwind-merge"

const Button = ({content, link, className='', ...props}) => {
  return (
    <>
      <a href={link}
      className={twMerge('btn px-4 py-2 bg-lime-700 hover:bg-lime-600 text-white rounded-md',className)}
      {...props}
      >
        {content}
      </a>
    </>
  )
}

export default Button
