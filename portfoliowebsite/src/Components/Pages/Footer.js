import React from 'react'
import IconWrapper from '../partials/IconWrapper'
import { Bio } from '../data/constants';

const Footer = () => {
    
    const fontObject = [
        { name: 'facebook', font: 'fa-brands fa-facebook-f' , link: Bio.facebook},
        { name: 'twitter', font: 'fa-brands fa-twitter', link: Bio.twitter },
        { name: 'github', font: 'fa-brands fa-github', link: Bio.github },
        { name: 'linkedin', font: 'fa-brands fa-linkedin-in', link:Bio.linkedin },
        { name: 'insta', font: 'fa-brands fa-instagram', link: Bio.insta },
    ];
    
  return (
    <div>
        <div className="py-16" style={{ background: "#222222" }}>
        <p className='text-base text-gray-400 text-center font-light'>
            Copyright &#169; 2024 All rights reserved
        </p>
         <div className="flex justify-center space-x-7 p-4">
            {fontObject.map(icon => (
                <IconWrapper key={icon.name} font={icon.font} link={icon.link} />
            ))}
         </div>
        </div>
        
      
    </div>
  )
}

export default Footer
