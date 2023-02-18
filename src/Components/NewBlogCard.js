import React from 'react'
import Drafts from './Drafts'

const NewCard = () => {
  return (
    <div className='w-full '>
        <div className=' m-10 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-lg shadow-indigo-500/50'>
            <div className='text-xl font-semibold m-1 p-1'>
                Title
            </div>
            <input placeholder='Enter Title'
            className='w-auto ring ring-offset-2 ring-blue-400  hover:ring-green-400 outline-none rounded-sm m-1 p-1 '
            />

            <div className='text-xl font-semibold m-1 p-1'>
                Description
            </div>
            <input placeholder='Enter Description'
            className='ring ring-offset-2 ring-blue-400  hover:ring-green-400 outline-none rounded-sm m-1 p-1 '
            />

            <div className='text-xl font-semibold m-1 p-1'>
                Content
            </div>
            <textarea 
            cols="40" rows="5"
            type='text'
            placeholder='Enter Content'
            className='ring ring-offset-2 ring-blue-400  hover:ring-green-400 outline-none rounded-sm m-1 p-1 w-full'
            />
            <div className='text-xl font-semibold'>
            <button type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-5 pl-4 pr-4">
            Create
            </button>
            </div>
        </div>
    </div>
  )
}

export default NewCard