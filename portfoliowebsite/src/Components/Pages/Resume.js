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
        <Heading first="My" last="Resume" />

        <div className="container mx-auto p-8 lg:p-32 grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <InfoSection data={educationData} />
          <InfoSection data={experienceData} />
        </div>
      </div>
    </>
  );
};

export default Resume;
