import React from 'react'
import InfoCard from './InfoCard';

const InfoSection = ({  data }) => {
    return (
      <div className="col-span-1 space-y-4">
        <h2 className="text-2xl text-white capitalize mb-8">{data[0].type}</h2>
        <div className="space-y-4">
          {data.map((d, index) => (
            <InfoCard
              key={index}
              degree={d.degree}
              institution={d.institution}
              position={d.position}
              company={d.company}
              description={d.description}
              startDate={d.startDate}
              endDate={d.endDate}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default InfoSection;
