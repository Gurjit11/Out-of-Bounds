import React from 'react'
import NewBlogCard from '../Components/NewBlogCard'
import Drafts from '../Components/Drafts'
import Navbar from '../Components/Navbar'

const CreateBlog = () => {
  return (
    <div className='grid md:grid-cols-2'>
      {/* <Navbar/> */}
      <NewBlogCard/>
      <Drafts/>
    </div>
  )
}

export default CreateBlog