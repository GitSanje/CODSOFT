import React from 'react'

const PriorityLevel = ({hoveredItem}) => {
  return (
    <>
    <div className=" absolute font-medium -top-7 flex items-center space-x-2">
                <div
                  className={`w-4 h-4 rounded-sm ${hoveredItem.color}`}
                ></div>
                <p>{hoveredItem.label}</p>
    </div>
    </>
  )
}

export default PriorityLevel