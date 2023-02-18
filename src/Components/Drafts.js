import React from 'react'

const Drafts = () => {
  const title = 'importance of blogging'
  const Description = ' A blog is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos. Blogging is a fun and flexible  way for self-expression and social connection, so it is no wonder blogs have become very popular.'

  return (
    // map to drafts
<>
    <div className='w-full'>
        <div className=' m-10 p-1 rounded-md bg-blue-200 shadow hover:drop-shadow-lg shadow-indigo-500/50'>
            <div className='text-xl font-semibold m-1 p-1'>
                Title:  { title }
            </div>
        <div className='bg-white  text-sm font-semibold m-1 p-1'>
        <div className='text-md font-semibold m-1 p-1'>
                Description:  {Description}
              </div>
            <div className='border-black border-2 mt-5 rounded-xl'>
              <div className='text-lg font-semibold m-1 p-1'>
              Image: 
              </div>
              <img className = 'rounded-lg' src = 'https://static.wixstatic.com/media/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png'></img>
            </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-2 pl-4 pr-4'>
            Add or replace image</button>
          </div>

          <button className='bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-2 pl-4 pr-4'>
            Post</button>
        </div>
    </div>



<div className='w-full'>
<div className=' m-10 p-1 rounded-md bg-blue-200 shadow hover:drop-shadow-lg shadow-indigo-500/50'>
    <div className='text-xl font-semibold m-1 p-1'>
        Title:  { title }
    </div>
<div className='bg-white  text-sm font-semibold m-1 p-1'>
<div className='text-md font-semibold m-1 p-1'>
        Description:  {Description}
      </div>
    <div className='border-black border-2 mt-5 rounded-xl'>
      <div className='text-lg font-semibold m-1 p-1'>
      Image: 
      </div>
      <img className = 'rounded-lg' src = 'https://static.wixstatic.com/media/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png'></img>
    </div>
  <button className='bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-2 pl-4 pr-4'>
    Add or replace image</button>
  </div>

  <button className='bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-2 pl-4 pr-4'>
    Post</button>
</div>
</div>
</>
  )
}

export default Drafts