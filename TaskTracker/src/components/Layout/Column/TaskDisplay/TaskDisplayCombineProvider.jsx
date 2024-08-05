import React from 'react'
import UpdateTaskProvider from '../../../state/Tasks/UpdateTaskProvider'
import DateTime from '../../../_partials/DateTime'
import DateTimeContextProvider from '../../../state/DateTime/DateTimeContextProvider'
//import DateTimeContextProvider from '../../../state/DateTime/DateTimeContextProvider'

const TaskDisplayProvider = ({children}) => {
  return (
    <>
    <UpdateTaskProvider>
       <DateTimeContextProvider>
       {children}

       </DateTimeContextProvider>
           
        
    </UpdateTaskProvider>
      
    </>
  )
}

export default TaskDisplayProvider
