import React from "react";

import { faCode, faEllipsis, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import targetPng from '../../assets/target-16.png'
const QuizzCard = () => {
  return (
    <>
      <div className="rounded border-2 flex flex-col gap-2  border-gray-300 bg-white p-4">
        <div className="relative bg-indigo-600 w-full h-32 flex justify-center items-center rounded cursor-pointer">
          <div className="absolute top-1 right-3">
            <FontAwesomeIcon
              className="text-white"
              height={15}
              width={15}
              icon={faEllipsis}
            />
          </div>
          <FontAwesomeIcon
            className="text-white"
            height={80}
            width={80}
            icon={faCode}
          />
        </div>
        <h4 className="font-bold">JavaScript Quiz</h4>
        <p className="text-sm font-light text-gray-400">20 Questions</p>
        <div className="flex gap-3">
          <div className="flex gap-1 items-center">
          {/* https://www.iconpacks.net/ */}
            <img src={targetPng} alt="" style={{ width: "20px", height: "20px" }} />
            <span className="text-[12px]"> Success rate 80%</span>
          </div>
          <div className="rounded-full size-7 bg-indigo-600 flex items-center justify-center">
            <FontAwesomeIcon
              className="text-white"
              height={16}
              width={16}
              icon={faPlay}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizzCard;
