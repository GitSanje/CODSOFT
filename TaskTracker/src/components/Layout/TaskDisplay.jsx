import React from 'react'

const TaskDisplay = ({handleOnDrag, taskname}) => {
 
  return (
    <>
    <div className="bg-white rounded-md border-2 shadow-sm hover:shadow-md cursor-pointer p-5"
    draggable
    onDragStart={(e) => {
      handleOnDrag(e, taskname)
    }}
    >
      
      <div className="flex flex-col space-y-2">
        
        <div className="text-black text-start text-md font-semibold ">
         Develop New E-reader
      </div>
      <h3 className="text-gray-600 text-start text-sm font-medium ">
         Shirley Bennett
      </h3>
      <p className="text-gray-600 text-start text-sm break-words w-full max-w-72 ">
         Re-design our current logo to a new updated version
      </p>

      </div>
    </div>
      
    </>
  )
}

export default TaskDisplay
