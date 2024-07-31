import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faClock,
  faFlag,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const TaskUpdateCard = () => {
  return (
    <div className="relative w-full px-4 ">
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl text-blue-500 font-bold">
          Develop new Eraser
        </h1>
        <h5 className="text-base text-gray-500">
          Created by Sanjay Karki on Jul 30, 2020 8:49 PM
        </h5>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium pt-7 pb-4">Initial form</h3>
        <div className="flex flex-col space-y-4 bg-white p-7 rounded-md">
          <div>
            <h3 className="text-black text-base font-semibold">
              *Who is creating?
            </h3>
            <p className="text-base text-gray-500">Jeff Bezos</p>
          </div>
          <div>
            <h3 className="text-black text-base font-semibold">
              *What?
            </h3>
            <p className="text-base text-gray-500">Develop new Ereader</p>
          </div>
          <div>
            <h3 className="text-black text-base font-semibold">
              More Info
            </h3>
            <p className="text-base text-gray-500">
              Digital reading is a new trend we need to develop a new device
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 absolute left-full -top-4 shadow-md w-full h-full rounded-md ml-4">
        <p className="text-base text-gray-500">Current Phase</p>
        <h1 className="text-xl font-bold">
          Backlog{" "}
          <span className="text-sm text-green-700">
            <FontAwesomeIcon icon={faTasks} />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TaskUpdateCard;
