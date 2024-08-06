import React, { createContext, useState } from 'react';

export const DateTimeContext = createContext("");

const DateTimeContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState("");

  const [showPicker, setShowPicker] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  


 
  

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCancel = (datetype, setDateTime) => {
   console.log(datetype)
    setStartDate(null);
    setTime("");
    setDateTime((prev) => {
           const updatedDatetime = {...prev}
           updatedDatetime[datetype] = ''
           return updatedDatetime;
  })
  setShowPicker(false);
  };

  const toggle = () => {
    setShowPicker(!showPicker);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    // Set the time part if it exists
    if (date && time) {
      const [hours, minutes] = time.split(":");
      date.setHours(hours, minutes);
      setStartDate(new Date(date));
    }
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    // Set the time part of the selected date
    if (startDate) {
      const [hours, minutes] = newTime.split(":");
      startDate.setHours(hours, minutes);
      setStartDate(new Date(startDate));
    }
  };

  const handleApply = (showTime,setDateTime) => {
    let updatedDate = new Date(startDate);
    if (showTime && time) {
      const [hours, minutes] = time.split(":");
      updatedDate.setHours(hours);
      updatedDate.setMinutes(minutes);
    }

    setDateTime((prev) => ({
      ...prev,
      ...(showTime ? { endDateTime: updatedDate } : { startDate: updatedDate }),
    }));

    setShowPicker(false);
  };

  const values = {
    handleIconClick,
    handleCancel,
    toggle,
    handleDateChange,
    handleTimeChange,
    handleApply,
    startDate,
    showPicker,
    isOpen,
    time,
    
  };

  return (
    <DateTimeContext.Provider value={values}>
      {children}
    </DateTimeContext.Provider>
  );
};

export default DateTimeContextProvider;
