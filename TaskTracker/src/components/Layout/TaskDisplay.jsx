import React from 'react'

const TaskDisplay = ({handleOnDrag, taskname, DataObj = {} }) => {

  const handleDragEnd = (e) => {
    
    e.target.style.visibility = 'visible';
    // requestAnimationFrame(() => {
    //   const placeholder = e.target.parentNode.querySelector('.p-12.border-2.border-dashed.border-gray-500');
    //   if (placeholder) {
    //     placeholder.remove();
    // }
    // })
   
  };
 
  return (
    <>
   

    <div className="bg-white rounded-md border-2 shadow-sm hover:shadow-md cursor-pointer p-5  transition duration-300 ease-in-out"
    draggable
    onDragStart={(e) => {
      handleOnDrag(e, taskname)
      
    }}
    onDragEnd={handleDragEnd}
    >
      
      <div className="flex flex-col space-y-2">
        
        <div className="text-black text-start text-md font-semibold ">
         { DataObj.heading || "Develop New E-reader"}
      </div>
      <h3 className="text-gray-600 text-start text-sm font-medium ">
      { DataObj.name || "Shirley Bennett "}
      </h3>
      <p className="text-gray-600 text-start text-sm break-words w-full max-w-72 ">
      {DataObj.description || " Re-design our current logo to a new updated version "}
      </p>

      </div>
    </div>
      
    </>
  )
}

export default TaskDisplay
