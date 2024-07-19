import React from "react";
import Navbar from "../Layout/Navbar";
import bgImage from "../assets/img/img-colored.jpg";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import About from "./About";

const Home = () => {
  return (
    <>
      <div
        className=" relative bg-image-container  z-[-1] "
        style={{ backgroundColor: "#9A9A9A" , }}
        
      >
        <div className="  flex justify-center  ">
          <img src={bgImage} className="" 
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
      <Portfolio/>
      <Resume/>
      <About/>

    </>
  );
};

export default Home;