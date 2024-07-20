import React from "react";

const InfoCard = ({
  position,
  institution,
  degree,
  company,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div
      className="flex flex-col space-y-4 flex-wrap p-7"
      style={{ background: "#333333" }}
    >
      <div className="date flex items-center text-white text-sm font-medium">
        <i className="fa-regular fa-calendar " ></i>
        <p className="ml-2">{`${startDate} - ${endDate}`}</p>
      </div>

      <h1 className="text-xl font-light text-lime-500 text-wrap">
        {degree ? degree : position}
      </h1>

      <p className="text-medium font-light text-gray-400 text-wrap">
        {description}
      </p>

      <h4 className="text-medium font-light text-gray-400">
        {company ? company : institution}
      </h4>
    </div>
  );
};

export default InfoCard;
