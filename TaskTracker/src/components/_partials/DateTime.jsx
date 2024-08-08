import React, { useState, useRef, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import { DateTimeContext } from "../state/DateTime/DateTimeContextProvider";
import { UpdateTaskContext } from "../state/Tasks/UpdateTaskProvider";
import { getTaskDetails } from "../util/getDifferencDate";

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

const DateTime = ({ showTime = false, dateType, taskName }) => {
  const {
    handleIconClick,
    handleCancel,
    toggle,
    handleDateChange,
    handleTimeChange,
    handleApply,
    startDate,
    showPicker,
    setStartDate,
    setTime,
    time,
  } = useContext(DateTimeContext);

  const { setDateTime, phaseUpdated } = useContext(UpdateTaskContext);
  const { taskInfo } = getTaskDetails(taskName, phaseUpdated);

  useEffect(() => {
    if (taskInfo) {
      const dateToSet =
        dateType === "startDate"
          ? taskInfo.dateTime.startDate
          : taskInfo.dateTime.endDateTime;

      if (dateToSet) {
        const dateObject = new Date(dateToSet);
        setStartDate(dateObject);
        if (dateType === "endDateTime") {
          const hours = dateObject.getHours();
          const minutes = dateObject.getMinutes();

          const timeString = `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}`;
          setTime(timeString);
        }

        setDateTime((prev) => ({
          ...prev,
          ...(dateType === "startDate"
            ? { startDate: dateToSet }
            : { endDateTime: dateToSet }),
        }));
      } else {
        console.error(`Null value found for ${dateType}`);
      }
    }
  }, [taskInfo, dateType, setStartDate]);

  //console.log(startDate,dateType)
  return (
    <div className="relative">
      <div className="flex flex-row items-center">
        <Input
          classNameInput="border-2 border-solid border-blue-300 px-7 py-2 focus:border-blue-600"
          type="text"
          readOnly
          required
          onClick={toggle}
          value={
            startDate
              ? `${startDate.toDateString()} - ${showTime ? time : ""}`
              : ""
          }
          placeholder={`Select date ${showTime ? "and time" : ""}`}
        />
        <div
          className="border-2 border-solid border-blue-300 text-gray-400 p-3 cursor-pointer rounded-md"
          onClick={toggle}
        >
          <FaCalendarAlt />
        </div>
      </div>

      {showPicker && (
        <div className="absolute bottom-full left-0 mt-2 border rounded bg-white shadow-lg z-10 p-4">
          <div className="flex flex-row items-center mb-2">
            <label htmlFor="time" className="text-base font-medium pr-2">
              Date:
            </label>

            <StyledDatePicker
              selected={startDate}
              onChange={handleDateChange}
              minDate={new Date()}
              className="custom-datepicker mb-2"
              // open={isOpen}
              // ref={datePickerRef}
            />
            {/* <FaCalendarAlt
                className="absolute right-8  text-gray-400 "
                onClick={handleIconClick}
              /> */}
          </div>

          {showTime && (
            <div className="flex items-center mb-2">
              <Input
                label={"Time"}
                classNameLabel="text-base font-medium"
                className="flex-row items-center space-x-2"
                onChange={handleTimeChange}
                id="time"
                type="time"
                value={time}
              />
            </div>
          )}

          <div className="flex justify-between">
            <Button onClick={() => handleApply(showTime, setDateTime)}>
              Save
            </Button>
            <Button
              onClick={() => handleCancel(dateType, setDateTime)}
              className="bg-gray-500 hover:bg-gray-600"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTime;
