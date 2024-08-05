import React from "react";

const DisplayBox = ({ data }) => {
  console.log(data.tags)
  return (
    <div className="container mx-auto flex justify-center items-center pb-12 md:h-full  transform duration-300 hover:-translate-y-2 hover:shadow-lg " style={{ background: "#333333",}}>
      
      <div className= "relative ">
      <a href={data.github} 
        target="_blank">
        <img
          src={data.image}
          alt={data.category}
          className="w-full h-auto md:max-w-md xl:max-w-lg  object-cover pb-2 rounded-md"
          
        />
        </a>
        
        <div className="pt-4 ml-4">
          <ul className="flex flex-row gap-2 items-center justify-start flex-wrap ">
           {data.tags && (
            data.tags.map((tag, index) => (
              <li key={index} className="px-2 text-sm  text-lime-500  bg-gray-700 rounded-md">{tag}</li>
            ))
           )} 
           
          </ul>
        </div>
        
        <div className="flex flex-col justify-start  text-white font-light space-y-4 pt-4 ml-4">
          <p className="text-xl font-semibold">{data.title}</p>
          <p className="text-sm text-gray-400 font-medium ">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;
