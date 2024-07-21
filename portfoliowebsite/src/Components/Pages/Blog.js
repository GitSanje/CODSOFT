import React from 'react'
import Heading from '../partials/Heading'
import BlogCard from '../partials/BlogCard'


const Blog = () => {
  return (
    <>
     <div className="pt-16" style={{ background: "#222222" }}>
         <Heading first="Blog on" last="Medium" />

         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3  gap-8 pt-16 px-16 lg:px-28">
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
         </div>
     </div>
      
    </>
  )
}

export default Blog
