import React from 'react'

const Heading = ({first, last}) => {
  return (
    <>
    <div className="text-white flex items-center justify-center ">
          <span className="text-3xl font-light "> {first}</span>
          <h4 className="text-3xl font-bold ml-4">{last}</h4>
        </div>
      
    </>
  )
}

export default Heading
