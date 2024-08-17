import React, { useEffect ,useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const CustomeTimer = ({endTime}) => {
    const navigate = useNavigate()
    const parseTime = (timeStr) => {
        const [hours, minutes, secs] = timeStr.split(':').map(Number);
        return (hours * 3600) + (minutes * 60) + secs;
    };

    const endTimeInSeconds = parseTime(endTime);

    const [seconds, setSeconds] = useState(endTimeInSeconds);

    useEffect(() => {
       
        const updateTimer = () => {
            setSeconds((prevSeconds) => {
                const newSeconds = prevSeconds - 1;
                if (newSeconds <= 0) {
                    navigate('/')
                    return 0; 
                }
                return newSeconds;
            });
        };
       

        
          
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    },[seconds])


    const formatTime = (timeInSec) => {
        const minutes = Math.floor(timeInSec/60).toString().padStart(2, '0')
        const seconds = (timeInSec % 60).toString().padStart(2, '0');
        if(minutes < 1 ){
           return <span className='text-red-600 font-medium'>{minutes}:{seconds}</span>
        }
        return  <span className='text-gray-600 font-medium'>{minutes}:{seconds}</span>;
    }
  return (
    <>
    <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            className="text-indigo-600"
            width={20}
            height={20}
            icon={faStopwatch}
          />
              {formatTime(seconds)}
        </div>
    </>
  )
}

export default CustomeTimer