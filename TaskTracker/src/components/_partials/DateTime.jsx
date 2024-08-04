import React, { useState, useRef, useContext } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import { DateTimeContext } from "../state/DateTime/DateTimeContextProvider";

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

const DateTime = ({ showTime = false , setDateTime}) => {


  const {
    handleIconClick,
    handleCancel,
    toggle,
    handleDateChange,
    handleTimeChange,
    handleApply,
    startDate,
    showPicker,
   
    time,
 
  } = useContext(DateTimeContext);


  

  return (
    <div className="relative">
      <div className="flex flex-row items-center">
        <Input
          classNameInput="border-2 border-solid border-blue-300 px-7 py-2 focus:border-blue-600"
          type="text"
          readOnly
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
                onChange={handleTimeChange}
                id="time"
                type="time"
                value={time}
              />
            </div>
          )}

          <div className="flex justify-between">
            <Button onClick={ () => handleApply(showTime,setDateTime)}>Save</Button>
            <Button
              onClick={handleCancel}
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
