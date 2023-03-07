import React from 'react'
import { FaHome, FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { logout } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate()

  const handleNavbarButton = () => {
    logout()
    navigate('/')
  }



  return (
    <div className='md:justify-between sticky top-0 z-30'>
      <nav className="p-2 bg-black shadow flex md:items-center justify-between">
        <div className="flex justify-between items-center ml-3 ">
          <span className="text-xl font-[Poppins] text-white cursor-pointer block">
            <img onClick={() => navigate('/explore')}
              className="h-10 rounded-full" src='https://i.pinimg.com/originals/75/38/8d/75388da785e0a7363325eb11d05a4c1b.jpg' alt="logo" />

          </span>
          <h5 className='text-white ml-4 text-3xl font-extralight'>BlogEarth</h5>
        </div>

        <ul className="flex items-center text-white bg-black  w-auto py-0 pl-0 ">
          <li className="md:mx-4 md:my-2 mx-2">
            <a href="/explore" className="text-2xl active hover:text-cyan-500 duration-500"><FaHome /></a>
          </li>
          <li className="md:mx-4 md:my-2 mx-2">
            <a href="/profile" className="text-2xl hover:text-cyan-500 duration-500"><FaUserCircle /></a>
          </li>
          <li className="md:mx-4 md:my-2 mx-2">
            <a href="/create" className="text-2xl hover:text-cyan-500 duration-500"><FaPlusCircle /></a>
          </li>

          <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold duration-500 px-1 md:px-6 md:py-2 md:mx-4 mx-2 hover:from-red-400 hover:to-yellow-400 rounded "
            onClick={handleNavbarButton}>
            Log Out
          </button>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar