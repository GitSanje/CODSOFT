import React from 'react'

const IconWrapper = ({font}) => {
  return (
    <>
    <div className="rounded-full text-lime-600 flex items-center justify-center  " 
    style={{ background:"#333333", width:"60px", height:"60px"}}>
<a href="" className='hover:text-lime-500'>
          <i className={`${font} fa-xl`} ></i>
</a>
       
    </div>
      
    </>
  )
}

export default IconWrapper
