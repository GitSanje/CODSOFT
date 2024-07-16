import React from 'react'
import Navbar from '../Layout/Navbar'
import bgImage from '../assets/img/portfolio-img.JPG';

const Home = () => {
  return (
    <>
      <Navbar/>
  
        <div className='bg-image-container ' style={{ height: '500px', width: '100%', overflow: 'hidden' }}>
            <img src={bgImage}  alt="Background" style={{ width: '100%', height: 'auto' , objectFit: 'cover'}}/>
        </div>
       
   
    </>
  )
}

export default Home
