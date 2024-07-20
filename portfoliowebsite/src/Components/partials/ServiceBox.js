import React from "react";

const ServiceBox = ({icon,  category, content,link}) => {



      

  return (
    <>
      <div
        className=" container flex  flex-col items-center justify-center space-y-4 p-7 rounded-md"
        style={{ background: "#333333" }}
      >
        <div
          className="bg-lime-600 rounded-full  flex items-center justify-center text-white"
          style={{ width: "120px", height: "120px" }}
        >
          {/* Icon */}

         { <i className={icon || "fa-solid fa-pager fa-4x  "}></i>}
        </div>

        <h2 className="text-xl text-white">{category || "Web Design"}</h2>

        <p className="text-medium font-light text-gray-400 ">
          {content || `Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.`}
        </p>

        <a
          href={link || '/'}
          className="text-lime-600 flex items-center space-x-2 transition duration-300 group hover:text-lime-500 pb-7"
        >
          <span className="transform transition duration-300 group-hover:-translate-x-2">
            Learn more
          </span>
          <span className="transform transition duration-300 group-hover:translate-x-2">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </>
  );
};

export default ServiceBox;
