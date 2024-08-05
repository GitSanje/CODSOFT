import React from "react";

import bgImage from "../assets/img/img-colored.jpg";


const Home = () => {
  return (
    <>
      <div
        className=" relative bg-image-container  z-10 "
        style={{ backgroundColor: "#9A9A9A" , }}
        
      >
        <div className="  flex justify-center  ">
          <img src={bgImage} className="rounded-full" 
          alt="Background"  
          
          />
          <div className="absolute inset-0 flex items-center justify-center mt-12">
            <div className="flex flex-col text-center space-y-3">
              <h2 className="text-2xl text-white"> Hello, I'am </h2>
              <h3 className=" text-5xl text-white font-bold "> Sanjay Karki</h3>
              <h3 className=" text-xl text-gray-200 font-light uppercase ">
                {" "}
                and this is my portfolio
              </h3>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default Home;
