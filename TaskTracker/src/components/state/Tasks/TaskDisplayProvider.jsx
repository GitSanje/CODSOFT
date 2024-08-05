import React, { createContext } from 'react'

export const TaskDisplayContext = createContext();

const TaskDisplayProvider = () => {

    const uniqueKey = `isVisible-${taskname}`;
    const [isVisible, setIsVisible] = useState(false);
  
  
    useEffect(() => {
      const visible = localStorage.getItem(uniqueKey) === "true";
      setIsVisible(visible);
      
    }, [uniqueKey]);
  
    console.log(isVisible)
  
    const handleDragEnd = (e) => {
      e.target.style.visibility = "visible";
    };
    const handleOnDrag = (e, name) => {
      e.dataTransfer.setData("text", name);
      
      requestAnimationFrame(() => {
        e.target.style.visibility = "hidden";
      });
    };
  
    const handleOnClick = () => {
  
      setIsVisible(true);
      localStorage.setItem(uniqueKey, true);
    };
    const handleOnClose = () => {
      setIsVisible(false);
      localStorage.setItem(uniqueKey, false);
    };
  return (
    <>
    <TaskDisplayContext.Provider value={values}>

    </TaskDisplayContext.Provider>
    </>
  )
}

export default TaskDisplayProvider