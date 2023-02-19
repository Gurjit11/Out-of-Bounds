import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerWithEmailAndPassword(email, password, name, gender);
      navigate("/login"); // Redirect to dashboard after successful registration
    } catch (error) {
      console.log(error.message);
      alert(error);
    }
  };

  return (
    <div className='flex justify-center items-center align-middle h-screen '
    style={{backgroundImage: `url('https://i.pinimg.com/originals/75/38/8d/75388da785e0a7363325eb11d05a4c1b.jpg')`,
      backgroundSize: 'cover ',
              }}>
    <div className='flex flex-col w-10/12 xl:w-4/12 lg:w-5/12 md:w-6/12 p-10 justify-center
         text-white rounded-2xl  bg-blue-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg
        height-40 font-semibold '>
      <input
        type="text"
        className="m-1 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
  
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
      <input
        type="text"
        className="m-1 mt-4 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
  
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <input
        type="text"
        className="m-1 mt-4 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
  
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
      />
      <input
        type="password"
        className="m-1 mt-4 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
  
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button 
      className='p-1 mt-6 m-1 font-semibold bg-blue-500 
      w-5/12 hover:bg-green-500
      hover:text-white rounded-lg text-xl '
       onClick={handleRegister}>
        Register
      </button>
      <div className='text-blue-100 text-center mt-4 text-sm' >
      Already have an account? <Link to="/login">Login</Link> now.
      </div>
    </div>
    </div>
  );
}

export default Register;