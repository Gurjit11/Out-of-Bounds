import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/explore");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/explore"); // Redirect to dashboard after successful sign in
    } catch (error) {
      console.log(error.message);
      alert("Google sign in failed. Please try again later.");
    }
  };

 
  return (
    <div className='flex justify-center items-center align-middle h-screen '
    style={{backgroundImage: `url('https://i.pinimg.com/originals/29/38/a3/2938a3b0772876c56082d65731c23692.gif')`,
      backgroundSize: 'cover ',
              }}>
        <div className='flex flex-col w-10/12 xl:w-4/12 lg:w-5/12 md:w-6/12 p-10 justify-center
         text-white rounded-2xl  bg-blue-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg
        height-40 font-semibold '>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          className="m-1 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
           
        />
        <input
          type="password"
          className="m-1 mt-5 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="text-center justify-center">

              <button 
              className='p-1 mt-6 m-1 font-semibold bg-blue-500 
              w-5/12 hover:bg-green-500
              hover:text-white rounded-lg text-xl '
              onClick={handleLogin}>
                Login
              </button>
              <div className="text-center">or</div>
              <button 
              className='p-1 mt-2 m-1 font-semibold bg-white 
              w-7/12 hover:bg-blue-500
              hover:text-white rounded-lg text-md  text-black' 
              onClick={handleGoogleSignIn}>

                <div className="flex text-center justify-center">

                Login with Google <img 
                src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1'
                className="h-7 ml-2 rounded-full"></img>
                </div>
              </button>
              <div
              className="text-sm mt-4"
              >
                <Link to="/reset">Forgot Password ?</Link>
              </div>
              <div
              className='text-blue-100 text-center'>
                Don't have an account? <Link to="/register">Register</Link> now.
              </div>

           </div>
            
        </div>
    </div>
  );
}

export default Login;