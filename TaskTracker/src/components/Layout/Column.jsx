import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getColor, getFooterVal } from "../util/getColorAndFooter";

const Column = ({ islast = false, colType, icon, cardCount, fun }) => {
  const iconColorClass = getColor(icon);
  const footerDescription = getFooterVal(
    colType.toLowerCase().replace(/\s+/g, "")
  );

  return (
    <>
      <div className="relative">
        
        <div className="mb-7">
          {!islast && (
            <div
              className="absolute -inset-y-12 right-1 flex items-center justify-center text-white bg-blue-500 rounded-full cursor-pointer hover:bg-blue-700"
              style={{ width: "30px", height: "30px" }}
              onClick={fun}
            >
              <i className="fa-solid fa-plus"></i>
            </div>
          )}

          <div className="absolute  -inset-y-12 flex flex-col ">
            <h1 className="text-lg font-semibold ">
              {colType}{" "}
              <span className={`text-sm ${iconColorClass}`}>
                <FontAwesomeIcon icon={icon} />
              </span>
            </h1>

            <p className="text-sm text-gray-500">
              {cardCount} card{cardCount !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4 ">
          <TaskDisplay />
          <TaskDisplay />
          <TaskDisplay />
          
        </div>
        <p className="text-gray-500 text-center mt-4 break-words w-full max-w-xs">
        {footerDescription}
      </p>
        {!islast && (
          <div
            className="absolute inset-y-7 -right-4 w-px bg-slate-400 h-screen"
            style={{ width: "1px" }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Column;
