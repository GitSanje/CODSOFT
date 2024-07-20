import React from 'react'
import CommentCard from '../partials/CommentCard'
import Heading from '../partials/Heading'

const ClientTestimonial = () => {
  return (
    <>
    <div className="" style={{ background: "#222222" }}>
    <Heading first="Client" last="Testimonial" />

    <div className="container mx-auto p-16 lg:p-28 grid grid-cols-1 md:grid-cols-2 gap-4">
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>
    <CommentCard/>

    </div>

    </div>
      
    </>
  )
}

export default ClientTestimonial
