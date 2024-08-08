import React, { useContext } from 'react'
import DateTimeContextProvider from '../../../state/DateTime/DateTimeContextProvider'
import DateTime from '../../../_partials/DateTime'
import { UpdateTaskContext } from '../../../state/Tasks/UpdateTaskProvider'


const DateTimeContent = ({title, dis, showTime, error, dateType, taskName}) => {

const { setDateTime } = useContext(UpdateTaskContext);
  return (
    <> 
    
     <h3 className="text-lg font-semibold pt-4">{title}</h3>
    <p className="text-base text-gray-500 pb-2">
      {dis}
    </p>
    <DateTimeContextProvider>
      <DateTime showTime={showTime}  dateType={dateType} taskName = {taskName}/>
      {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
    </DateTimeContextProvider>
    
    </>
  )
}

export default DateTimeContent