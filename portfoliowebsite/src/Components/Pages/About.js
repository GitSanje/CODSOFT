import React from "react";
import Myimg from "../assets/img/portfolio-img.png";
import Heading from "../partials/Heading";
import Button from "../partials/Button";

// .section-heading {
//     margin-bottom: 30px;
//     position: relative;
//     z-index: 10;
// }
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
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className=" text-base text-gray-500  ">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="flex space-x-4">
                <Button
                  content="Hire me"
                  link="#"
                
                />
                <Button
                  content="Download CV"
                  link="#"
                  className="bg-gray-500 hover:bg-gray-600"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
