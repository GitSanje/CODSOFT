import React from 'react'

const Dropdown = ({items, onHover, onLeave,handleDropdown}) => {
    

  return (
    <>
  
    <div className="bg-white shadow-lg border-2 border-blue-400 w-2/3 z-50 absolute top-full mt-2 rounded-md">
        <p className='text-base text-gray-500 p-2'>Add lables</p>

        <ul className='flex flex-col space-y-4 '>
        {items.map((item, index) => (
          <li
            key={index}
            className='text-base font-semibold flex flex-row items-center hover:text-blue-400 cursor-pointer hover:bg-gray-200 py-2'
            onMouseEnter={() => onHover(item)}
            onMouseLeave={onLeave}
            onClick={() =>handleDropdown(item)}
          >
            <div className={`w-4 h-4 rounded-sm mx-7 ${item.color}`}></div>
            <p>{item.label}</p>
          </li>
        ))}
            
        </ul>
    </div>
      
    </>
  )
}

export default Dropdown
