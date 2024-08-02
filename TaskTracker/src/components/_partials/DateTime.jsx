import React, { useState,useRef } from 'react'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

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


const DateTime = ({showTime=false, setDateTime}) => {
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState('');


  const [showPicker, setShowPicker] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };
    const handleCancel = () => {
      setShowPicker(false);
      setStartDate(null);
      setTime('');
    };
    const toogle = () => {
      setShowPicker(!showPicker);
    };

    const handleDateChange = (date) => {
      setStartDate(date);
      // Set the time part if it exists
      if (date && time) {
        const [hours, minutes] = time.split(':');
        date.setHours(hours, minutes);
        setStartDate(new Date(date));
      }
    };


    const handleTimeChange =(e) => {
      const newTime = e.target.value;
       setTime(newTime);
       // Set the time part of the selected date
    if (startDate) {
      const [hours, minutes] = newTime.split(':');
      startDate.setHours(hours, minutes);
      setStartDate(new Date(startDate));
    }
    }

  const handleApply = () => {
    if(showTime){
      const [hours, minutes] = time.split(':');
      const updatedDate = new Date(startDate);
      updatedDate.setHours(hours);
      updatedDate.setMinutes(minutes);
    }
    const updatedDate = new Date(startDate);
      
      setDateTime((prev)=> (
        { ...prev, 
         ... (showTime ?{ endDateTime: updatedDate } : { startDate:  updatedDate} )}
         
       ))
     
      setShowPicker(false);
    }

  return (
    <>

    <div className="relative">

      <input
    
      className="border-2 border-solid border-blue-300 px-7 py-2 focus:border-blue-600 outline-none"
      type="text"
      readOnly
      onClick={toogle}
      value={startDate ? `${startDate.toDateString()} - ${showTime ? time :'' }` : ''}
      placeholder={`Select date ${showTime ? ("and time") : '' }`}
      />
     <FaCalendarAlt className="absolute right-64 bottom-4 text-gray-400 " onClick={toogle}/> 

      {showPicker && (
          <div className="absolute bottom-full left-0 mt-2 border rounded bg-white shadow-lg z-10 p-4">
             <div className="flex flex-row items-center mb-2">
             <label htmlFor="time" className="text-base font-medium pr-2">Date:</label>
          
            
            <StyledDatePicker
              selected={startDate}
              onChange={handleDateChange}
              minDate={new Date()}
              className="custom-datepicker mb-2"
              open={isOpen}
              ref={datePickerRef}
            />
           
           <FaCalendarAlt className="absolute right-8  text-gray-400 " 
           onClick={handleIconClick}/>

           </div>

           {showTime && <div className="flex items-center mb-2">
            <label htmlFor="time" className="text-base font-medium pr-2">Time:</label>
            <input
              className="border-2 border-solid border-blue-300 px-2 focus:border-blue-600 outline-none"
              type="time"
              id="time"
              value={time}
              onChange={handleTimeChange}
            />
          </div>}
          


          <div className="flex justify-between">
            <button
              onClick={handleApply}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </div>


      )}
    </div>

    </>
  )
}

export default DateTime
