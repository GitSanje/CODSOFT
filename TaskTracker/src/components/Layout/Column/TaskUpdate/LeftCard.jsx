import React from 'react'

const LeftCard = ({name, heading, dis}) => {
  return (
    <>
    
    
    <div className="w-96 h-96">
    <div className="flex flex-col space-y-2 ">
      <h1 className="text-xl text-blue-500 font-bold">{heading}</h1>
      <h5 className="text-base text-gray-500">
        Created by Sanjay Karki on Jul 30, 2020 8:49 PM
      </h5>
    </div>

    <div className="mt-4 ">
      <h3 className="text-lg font-medium pt-7 pb-4">Initial form</h3>
      <div className="flex flex-col space-y-4 bg-white p-7 rounded-md">
        <div>
          <h3 className="text-black text-base font-semibold">
            *Who is creating?
          </h3>
          <p className="text-base text-gray-500">{name}</p>
        </div>
        <div>
          <h3 className="text-black text-base font-semibold">*What?</h3>
          <p className="text-base text-gray-500">{heading}</p>
        </div>
        <div>
          <h3 className="text-black text-base font-semibold ">More Info</h3>
          <p className="text-base text-gray-500 text-wrap">
            {dis}
            
          </p>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default LeftCard