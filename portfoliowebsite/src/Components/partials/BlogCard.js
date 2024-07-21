import React from "react";
import blog_img from "../assets/img/post_2.jpg.webp";

const BlogCard = ({img, title, dis, date, comment}) => {
  return (
    <div className=" rounded-md transform transition duration-300 hover:-translate-y-2 " style={{ background: "#333333" }}>
      <div className="flex flex-col items-center justify-center space-y-7">
        <div className="w-full h-64 overflow-hidden rounded-md">
          <a href="#">
            <img
            src={img || blog_img}
            alt=""
            className="w-full h-full object-cover"
          /></a>
        </div>

        <a href="#"
          className="text-xl text-white font-light px-7 ">
          <h1 className="hover:text-lime-600"> { title || "Creative Product Designer From Facebook"}</h1> 
        </a>

        <p className="text-md text-gray-400 font-light px-7">
         {dis ||  `Even the all-powerful Pointing has no control about the blind texts
          it is an almost unorthographic.` }
        </p>
      </div>

      <div className="p-7 text-gray-500 flex flex-col lg:flex-row lg:space-x-2">
        
          <a href="#" className="hover:text-lime-600">
            <i className="fa-regular fa-calendar mr-2"></i>
            <span>{date || "Aug 7, 2018"}</span>
          </a>
            <a href="#" className="hover:text-lime-600">
            <i className="fa-solid fa-comment mr-2"></i>
            <span>{comment || '5'} Comments</span>
          </a>
        
      </div>
    </div>
  );
};

export default BlogCard;
