import React from "react";
import Myimg from "../assets/img/portfolio-img.png";
import Heading from "../partials/Heading";
import Button from "../partials/Button";
import ClientTestimonial from "./ClientTestimonial";
import MyServices from "./MyServices";
import Blog from "./Blog";
import { HashLink } from "react-router-hash-link";


const About = () => {
  return (
    <>
      <div className=" p-8 lg:px-36 " style={{ background: "#222222" }}>
        <div className="container mx-auto flex flex-col lg:flex-row mb-5 items-center ">
          <div className="lg:w-3/5  lg:p-28 mb-5 lg:mb-0 ">
            <img
              src={Myimg}
              alt="Portfolio"
              className=" w-full object-cover "
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="lg:w-2/5  flex flex-col justify-start ">
            <div className="">
              <Heading first="About" last="Me" />
            </div>

            <div className="text-xl text-gray-500 flex flex-col space-y-7 pt-5">
              <p>
              I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
              </p>
              {/* <p className=" text-base text-gray-500  ">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p> */}
              <p className="flex space-x-4">
              <HashLink
              to="#contact"
              >
                <Button
                  content="Hire me"
                  link="#"
                
                />
                  
                </HashLink>
                <Button
                  content="Download CV"
                  link="https://drive.google.com/file/d/1HXwOSKxzbDfB0fSUTQ0wavcAkz5-_CUX/view?usp=sharing"
                  className="bg-gray-500 hover:bg-gray-600"
                  target="_blank"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div">
      {/* <ClientTestimonial/>
      <MyServices/>
      <Blog/> */}

      </div>
    
      
    </>
  );
};

export default About;
