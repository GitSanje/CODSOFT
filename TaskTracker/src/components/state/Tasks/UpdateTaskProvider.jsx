import React, { createContext, useEffect, useState} from 'react'

import { toast } from 'react-toastify';


export const UpdateTaskContext = createContext("");



const UpdateTaskProvider = ({children}) => {
  

  // UpdateTask
  const initialPhaseUpdated = JSON.parse(localStorage.getItem("phaseUpdated")) || {
    taskName: "",
    clickItem: "",
    dateTime: ""
  };
    const [phaseUpdated,setPhaseUpdated] = useState(initialPhaseUpdated);
    const [hoveredItem, setHoveredItesm] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const [clickItem, setClickItem] = useState(null);
    const [dateTime, setDateTime] = useState({
      startDate: "",
      endDateTime: "",
    });

   
    const [errors, setErrors] = useState({});
    // visible of update task
    const [isVisible, setIsVisible] = useState(false);

    
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

      useEffect(() => {
        if (phaseUpdated.taskName) {
          localStorage.setItem("phaseUpdated", JSON.stringify(phaseUpdated));
        }
       
       
      }, [phaseUpdated])

      
      const validateFields = () => {
            let tempErrors = {};

                if (!clickItem) tempErrors.priority = "Priority is required.";
                if (!dateTime.startDate) tempErrors.startDate = "Start date is required.";
                if (!dateTime.endDateTime) tempErrors.endDate = "End date is required.";
                if (dateTime.startDate && dateTime.endDateTime && dateTime.startDate >= dateTime.endDateTime) {
                  tempErrors.endDate = "End date should be greater than start date.";
                }
                setErrors(tempErrors);

                return Object.keys(tempErrors).length === 0;
      }

      const handleSubmit = async (taskName, e) => {
     
        e.preventDefault();
        const uniqueKey = `isVisible-${taskName}`;
        
        
        if (validateFields()) {
           
          await setPhaseUpdated({
              taskName: taskName,
              clickItem: clickItem,
              dateTime: dateTime
            });
           

            
           toast.success("Form submitted successfully");
          
          
          setTimeout(() => {
          
          // Update the state for visibility
            setIsVisible(false);
      
            // Update the localStorage
            localStorage.setItem(uniqueKey, JSON.stringify(false));
          }, 5000);
          
        
         
        } else {
          toast.error("Form has errors");
        }
      };
      
      

     // 

      const values = {
        hoveredItem,
        handleHover,
        handleLeave,
        handleDropdown,
        toggleDropdown,
        clickItem,
        dropdown,
        dateTime,
        setDateTime,
        phaseUpdated,
        handleSubmit,
        errors,
        isVisible,
        setIsVisible


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

