import React from 'react'
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";


function Navbar() {
  let menuopened = false;
    const Menu = () =>{

    }
  return (
    <div>
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div className="flex justify-between items-center ">
      <span className="text-2xl font-[Poppins] cursor-pointer">
        <img className="h-10 inline"
          src="bloglogo.png"/>
        tailwind
      </span>

      <span className="text-3xl cursor-pointer mx-2 md:hidden block">
        {/* <ion-icon name="menu" onclick="Menu(this)"></ion-icon> */}
        {menuopened ? <IoClose onClick={Menu}/>: <IoMenu onClick={Menu}/>}
      </span>
    </div>

    <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
     style={`${menuopened? 'top-[80px]' : ""}`}>
      <li className="mx-4 my-6 md:my-0">
        <a href="/" className="text-xl hover:text-cyan-500 duration-500">HOME</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="/" className="text-xl hover:text-cyan-500 duration-500">SERVICE</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="/" className="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="/" className="text-xl hover:text-cyan-500 duration-500">CONTACT</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="/" className="text-xl hover:text-cyan-500 duration-500">BLOG'S</a>
      </li>

      <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
        Sign Up
      </button>
      <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
        Log In
      </button>

    </ul>
  </nav>
    </div>
  )
}

export default Navbar
