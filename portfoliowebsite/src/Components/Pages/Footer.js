import React from 'react'
import IconWrapper from '../partials/IconWrapper'

const Footer = () => {
    const fontObject = [
        { name: 'facebook', font: 'fa-brands fa-facebook-f' },
        { name: 'twitter', font: 'fa-brands fa-twitter' },
        { name: 'google', font: 'fa-brands fa-google' },
        { name: 'linkedin', font: 'fa-brands fa-linkedin-in' },
        { name: 'linkedin', font: 'fa-brands fa-instagram' },
    ];
    
  return (
    <div>
        <div className="py-16" style={{ background: "#222222" }}>
        <p className='text-base text-gray-400 text-center font-light'>
            Copyright &#169; 2024 All rights reserved
        </p>
         <div className="flex justify-center space-x-7 p-4">
            {fontObject.map(icon => (
                <IconWrapper key={icon.name} font={icon.font} />
            ))}
         </div>
        </div>
        
      
    </div>
  )
}

export default Footer
