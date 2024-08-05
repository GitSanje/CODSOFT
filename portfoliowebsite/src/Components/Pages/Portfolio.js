import React, { useState } from "react";
import DisplayBox from "../partials/DisplayBox";
import p1img from "../assets/img/p1.jpg";
import Heading from "../partials/Heading";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/constants";

const Portfolio = () => {

  
  let Categories = [
    { name: "All", link: "/" },
    { name: "Web App", link: "/" },
    { name: "Machine Learning", link: "/" },
    // { name: "Typography", link: "/" },
    // { name: "Photography", link: "/" },
  ];
  

  const [data, setData] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState('All')


  const handleFilter = (categoryName) => 
  {
    setSelectedCategory(categoryName);
    if( categoryName == "All"){
     setData(projects);
    }
    else
   {
 
    setData(
      projects.filter(
        (item) => item.category.toLowerCase() === categoryName.toLowerCase()
      )
    );
     
   }

  }
   

    
  
    
  return (
    <>
      <div className=" mx-auto pt-16" style={{ background: "#222222" }}>
        
          <Heading first="Featured" last="Portfolio"/>
        <div className="container mx-auto py-12">
          <ul className="flex flex-wrap justify-center    ">
            {Categories.map((category, index) => (
              <li
                id={category.name}
                onClick={() => handleFilter(category.name)}
                key={index}
                className={`transition-colors duration-300  ${selectedCategory == category.name ? "text-lime-500": "text-gray-400"} font-light  hover:text-lime-500 my-2 mx-8 cursor-pointer`}
              >
                  {category.name}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:mx-20 lg:mx-32 pt-12 " >
          <AnimatePresence>
            {data.map((item, index) => (
              <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.8, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 50 }}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                 
               >
              <DisplayBox  data={item} />
              </motion.div>
            ))}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
