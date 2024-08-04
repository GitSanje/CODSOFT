import React, { createContext, useState} from 'react'

export const UpdateTaskContext = createContext("");



const UpdateTaskProvider = ({children}) => {

    const [hoveredItem, setHoveredItesm] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const [clickItem, setClickItem] = useState(null);
    const [dateTime, setDateTime] = useState({
      startDate: "",
      endDateTime: "",
    });
  
    
    const handleHover = (item) => {
        setHoveredItesm(item);
      };
      const handleLeave = () => {
        setHoveredItesm(null);
      };
      const handleDropdown = (item) => {
        setClickItem(item);
        setDropdown(false);
      };
    
      const toggleDropdown = () => {
        setDropdown(!dropdown);
      };

      const values = {
        hoveredItem,
        handleHover,
        handleLeave,
        handleDropdown,
        toggleDropdown,
        clickItem,
        dropdown,
        dateTime,
        setDateTime

      }
  return (
    <>
      <UpdateTaskContext.Provider value={values}>
        {children}
      </UpdateTaskContext.Provider>
    </>
  )
}

export default UpdateTaskProvider

