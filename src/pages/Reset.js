import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase-config";


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center align-middle h-screen '
    style={{backgroundImage: `url('https://img.lovepik.com/photo/50054/1552.jpg_wh300.jpg')`,
      backgroundSize: 'cover ',
              }}>
    <div className='flex flex-col w-10/12 xl:w-4/12 lg:w-5/12 md:w-6/12 p-10 justify-center
         text-white rounded-2xl  bg-blue-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg
        height-40 font-semibold '>
        <input
          type="text"
          className="m-1 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
           
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className='p-1 mt-6 m-1 font-semibold bg-blue-500 
           hover:bg-green-500
          hover:text-white rounded-lg text-xl '
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div className='text-blue-50 mt-4 text-center'>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;