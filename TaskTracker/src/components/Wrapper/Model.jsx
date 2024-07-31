import React  from 'react'

const Model = ({children, isVisible, onClose}) => {

 if(!isVisible) return null;

  return (
    <>
    <div className="fixed inset-0  flex items-center justify-start bg-blue-500 bg-opacity-40 z-50 px-4 lg:px-8">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg z-10 ">
            <button onClick={onClose} className='absolute top-2 right-2'>
            <i className="fa-solid fa-xmark fa-lg text-white"></i>
            </button>
       
        {children}
       
        
        </div>

    </div>
      
    </>
  )
}

export default Model
