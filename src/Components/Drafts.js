import React, { useState, useEffect } from 'react';
import { storage } from '../firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
function Drafts() {
  const title = 'importance of blogging'
  const Description = ' A blog is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos. Blogging is a fun and flexible  way for self-expression and social connection, so it is no wonder blogs have become very popular.'
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const imageListRef = ref(storage, 'images/');
    listAll(imageListRef).then((res) => {
      Promise.all(
        res.items.map((itemRef) => {
          return getDownloadURL(itemRef);
        })
      ).then((urls) => {
        if (urls.length > 0) {
          setImageUrl(urls[0]);
        }
      });
    });
  }, []);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      return;
    }
    const imageRef = ref(storage, `images/${selectedFile.name}-${uuidv4()}`);
    uploadBytes(imageRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };

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
              {imageUrl && (
          <img src={imageUrl} alt="uploaded" width="200" />
        )} </div>
            <input type="file" onChange={handleFileSelect} />
            <button className='bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-2 pl-4 pr-4' onClick={handleUpload}>
            Add or replace image</button>
          </div>

          <button className='bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-2 rounded-md m-2 mt-2 pl-4 pr-4'>
            Post</button>
        </div>
    </div>
    );
}
export default Drafts;
