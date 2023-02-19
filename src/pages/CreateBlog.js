 import Drafts from '../Components/Drafts'
 import Navbar from '../Components/Navbar'

// const CreateBlog = () => {
//   return (
//     <div className='grid md:grid-cols-2'>
//       {/* <Navbar/> */}
//       <NewBlogCard/>
//       <Drafts/>
//     </div>
//   )
// }

// export default CreateBlog

import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreateBlog({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    // navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      //  navigate("/login");
    }
  }, []);

  return (
<div>
<Navbar/>


    <div className='grid md:grid-cols-2'>
        <div className=' m-10 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-lg shadow-indigo-500/50'>
      
        <h1>Create A Post</h1>
        
            <div className='text-xl font-semibold m-1 p-1'>
                Title
            </div>
            <input placeholder='Enter Title'
            className='w-auto ring ring-offset-2 ring-blue-400  hover:ring-green-400 outline-none rounded-sm m-1 p-1 '
            onChange={(event) => {
              setTitle(event.target.value);
              console.log(event.target.value);
            }}/>

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
            onChange={(event) => {
              setPostText(event.target.value);
            }}
            placeholder='Enter Content'
            className='ring ring-offset-2 ring-blue-400  hover:ring-green-400 outline-none rounded-sm m-1 p-1 w-full'
            />
        <div className='text-xl font-semibold'>
        <button onClick={createPost}
            type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-5 pl-4 pr-4">
            Create
        </button>
        </div>
      </div>

      <Drafts/>
    </div>

</div>
  );
}

export default CreateBlog;
