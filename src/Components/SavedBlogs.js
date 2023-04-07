
import React, { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, deleteDoc, addDoc,doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

 function SavedBlogs() {
  const [drafts, setDrafts] = useState([]);
  let navigate = useNavigate();


  useEffect(() => {
    // Subscribe to the user's authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Query the drafts collection for posts authored by the current user
        const draftsCollectionRef = collection(db, "drafts");
        const q = query(
          draftsCollectionRef,
          where("author.id", "==", user.uid)
        );

        // Subscribe to the query using onSnapshot listener
        const unsubscribeQuery = onSnapshot(q, (querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            // Push the document data to the "docs" array
            docs.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          // Set the "drafts" state with the new data
          setDrafts(docs);
        });

        // Unsubscribe from the query when the component unmounts
        return () => {
          unsubscribeQuery();
        };
      } else {
        // Clear the "drafts" state if the user is not authenticated
        setDrafts([]);
      }
    });

    // Unsubscribe from the authentication state changes when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const postDraft=(draft)=>{
    const draftRef=doc(db,"drafts",draft.id);
    deleteDoc(draftRef);

    const postColllectionRef= collection(db,"posts");
    addDoc(postColllectionRef,{
    title: draft.title,
    desciption: draft.desciption,
    postText: draft.postText,
    likes:0,
  
    likedBy:[],
    author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
    alert('Blog Posted');
    //navigate("/explore");
  }



return(
  <div className="">
    <hr></hr>
    <h1 className="text-xl font-bold my-2 mx-6">Drafts</h1>
    <hr></hr>
 <div className="grid md:grid-cols-2 overflow-y-auto max-h-[640px]">
{drafts.map((draft) => (
  <div >
        <div className=' m-5 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-lg shadow-indigo-500/50'>
      
        <h1>Saved Posts</h1>
          <div >
            <div className="text-xl font-semibold m-1 p-1">Title</div>
            <input placeholder='Enter Title'
            className='w-auto ring ring-offset-2 ring-blue-400  hover:ring-green-400 outline-none rounded-sm m-1 p-1 '
            value={draft.title}
              onChange={(event) => {
                // Create a new array with the updated draft data
                const updatedDrafts = drafts.map((d) => {
                  if (d.id === draft.id) {
                    return {
                      ...d,
                      title: event.target.value,
                    };
                  }
                  return d;
                });
                // Set the "drafts" state with the new array
                setDrafts(updatedDrafts);
              }}
            />
            <div className="text-xl font-semibold m-1 p-1">Description</div>
            <input placeholder='Enter Description'
            className='ring ring-offset-2 ring-blue-400  hover:ring-green-400 outline-none rounded-sm m-1 p-1 '
            value={draft.desciption}
              onChange={(event) => {
                const updatedDrafts = drafts.map((d) => {
                  if (d.id === draft.id) {
                    return {
                      ...d,
                      desciption: event.target.value,
                    };
                  }
                  return d;
                });
                setDrafts(updatedDrafts);
              }}
            />
            <div className="text-xl font-semibold m-1 p-1">Content</div>
            <textarea
              cols="40"
              rows="5"
              placeholder="Enter Content"
              className='ring ring-offset-2 ring-blue-400  hover:ring-green-400 outline-none rounded-sm m-1 p-1 w-full'
            value={draft.postText}
              onChange={(event) => {
                const updatedDrafts = drafts.map((d) => {
                  if (d.id === draft.id) {
                    return {
                      ...d,
                      postText: event.target.value,
                    };
                  }
                  return d;
                });
                setDrafts(updatedDrafts);
              }}
            />
          </div>
        <div className="text-xl font-semibold">
        <button onClick={()=>{postDraft(draft)}}
            type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-5 pl-4 pr-4">
            Post
        </button>
        </div>
      </div>
    </div>
  ))}
  </div>
  </div>
);
            }
export default SavedBlogs; 





