import React from "react";
import Heading from "../partials/Heading";
import InfoCard from "../partials/InfoCard";

import data from "../data/ResumeData";
import InfoSection from "../partials/InfoSection";

const Resume = () => {
  const educationData = data.filter((d) => d.type === "education");
  const experienceData = data.filter((d) => d.type === "experience");
  return (
    <>
      <div style={{ background: "#222222" }}>
        <Heading first="My" last="Education" />

        <div className="container mx-auto p-8 lg:p-32 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {/* <InfoSection data={educationData} /> */}
          {/* <InfoSection data={experienceData} /> */}
          {/* <div className=" space-y-4">  */}
      {/* col-span-1 */}
      {educationData.map((d, index) => (
            <InfoCard
              key={index}
              degree={d.degree}
              institution={d.institution}
              position={d.position}
              company={d.company}
              description={d.description}
              startDate={d.startDate}
              endDate={d.endDate}
            />
          ))}
        {/* <h2 className="text-2xl text-white capitalize mb-8">{educationData[0].type}</h2>
        <div className="space-y-4">
          
        </div> */}
      {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Resume;
