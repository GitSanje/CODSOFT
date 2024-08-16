import React from 'react'
import emptybox from "../../assets/empty_box.png"

const Placeholder = () => {
  return (
    <>
    <div className="flex-col gap-3 p-4 flex justify-center items-center pb-20">
    {/* https://www.svgrepo.com/svg/489659/empty-box?edit=true */}
        <img src={emptybox} alt="" />

        <div className="text-lg text-gray-500">
            Click below to begin your journey here ...
        </div>
        <button className='p-3 px-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-700'>
            Create your first quiz
        </button>

    </div>
    </>
  )
}

export default Placeholder