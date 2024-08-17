import React from 'react'
import Button from '../Button'

const QuizBuildNav = () => {
  return (
    <>
<div className="my-12 mx-5 flex justify-between items-center">
    <div className="flex gap-2 items-center">
        <img src="" alt="" style={{width:"50px", height:"50px"}}/>
        <span className='text-2xl'>
            Quiz <span className='text-indigo-700 font-bold'> Builder</span>
        </span>

    </div>
    <Button
    className={"px-5"}>
        Save
    </Button>

</div>
    </>
  )
}

export default QuizBuildNav