import React, { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, deleteDoc, addDoc, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";

function Mypost() {
  const [drafts, setDrafts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {

        const draftsCollectionRef = collection(db, "posts");
        const q = query(
          draftsCollectionRef,
          where("author.id", "==", user.uid)
        );


        const unsubscribeQuery = onSnapshot(q, (querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {

            docs.push({
              id: doc.id,
              // likes: doc.data().likes || 0,
              // liked: false, 
              ...doc.data(),
            });
          });
          setDrafts(docs);
        });


        return () => {
          unsubscribeQuery();
        };
      } else {

        setDrafts([]);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // const handleLike = (draft) => {
  //   const updatedDrafts = drafts.map((d) => {
  //     if (d.id === draft.id) {
  //       if (d.liked) {
  //         return {
  //           ...d,
  //           likes: d.likes - 1,
  //           liked: false,
  //         };
  //       } else {
  //         return {
  //           ...d,
  //           likes: d.likes + 1,
  //           liked: true,
  //         };
  //       }
  //     }
  //     return d;
  //   });
  //   setDrafts(updatedDrafts);
  // };



  return (
    <div>
      <Navbar />
      <hr></hr>
      <div className="bg-white sticky top-14 pt-1 z-10">
        <h1 className="text-xl font-bold my-2 pb-1 mx-6 ">My Posts</h1>
        <hr></hr>
      </div>
      <div className="grid md:grid-cols-2">
        {drafts.map((draft) => (
          <div key={draft.id}>
            <div className=' m-10 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-lg shadow-indigo-500/50'>


              <div >
                <div className="text-xl font-semibold m-1 p-1">Title</div>
                <input readOnly
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
                <input readOnly
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
                <textarea readOnly
                  cols="40"
                  rows="5"
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
                {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleLike(draft)}
        >
          {draft.liked ? "Unlike" : "Like"} ({draft.likes})
        </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Mypost;






