import React from "react";

const DisplayBox = ({ img, dis, category }) => {
  return (
    <div className="container mx-auto flex justify-center items-center pb-12">
      <div className="">
        <img
          src={img}
          alt={category}
          className="w-full h-auto md:max-w-md xl:max-w-lg  xl:w-96 xl:h-96 pb-5"
        />
        <div className="flex flex-col justify-center items-center text-white font-light space-y-4">
          <p className="text-xl">{dis}</p>
          <p className="text-xs text-gray-400 uppercase">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;
