import React from "react";
import Heading from "../partials/Heading";
import ServiceBox from "../partials/ServiceBox";

const MyServices = () => {
  const serviceData = [
    {
      title: "Web Design",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      icon: "fa-solid fa-pager fa-3x",
      link: "/",
    },
    {
      title: "Search Engine Optimization",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      icon: "fa-solid fa-magnifying-glass fa-3x",
      link: "/",
    },
    {
      title: "Video Editing",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      icon: "fa-solid fa-video fa-3x",
      link: "/",
    },
  ];

  return (
    <>
      <div style={{ background: "#222222" }}>
        <Heading first="My" last="Services" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3  gap-8 pt-16 px-16 lg:px-28 ">
          {serviceData.map((data, index) => (
            <ServiceBox
              icon={data.icon}
              category={data.title}
              content={data.description}
              link={data.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyServices;
