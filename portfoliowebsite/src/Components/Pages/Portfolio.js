import React from "react";
import DisplayBox from "../partials/DisplayBox";
import p1img from "../assets/img/p1.jpg";
import Heading from "../partials/Heading";

const Portfolio = () => {
  let Categories = [
    { name: "All", link: "/" },
    { name: "Packeging", link: "/" },
    { name: "Mockup", link: "/" },
    { name: "Typography", link: "/" },
    { name: "Photography", link: "/" },
  ];

  const data = [
    { dis: "Square Box Mockup", category: "Mockup" },
    { dis: "Product Box Package Mockup", category: "Mockup" },
    { dis: "Creative Package Design", category: "PACKAGING" },
    { dis: "Packaging Brand", category: "PACKAGING" },
    { dis: "Isometric 3D Extrusion", category: "TYPOGRAPHY" },
    { dis: "White Space Photography", category: "PHOTOGRAPHY" },
  ];

  return (
    <>
      <div className=" mx-auto" style={{ background: "#222222" }}>
        
          <Heading first="Featured" last="Portfolio"/>
        <div className="container mx-auto py-12">
          <ul className="flex flex-wrap justify-center    ">
            {Categories.map((category) => (
              <li
                key={category.name}
                className="font-light text-gray-400 hover:text-lime-500 my-2 mx-8 "
              >
                <a href={category.link}>{category.name}</a>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 md:mx-20 lg:mx-32 pt-12 ">
            {data.map((item) => (
              <DisplayBox img={p1img} dis={item.dis} category={item.category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
