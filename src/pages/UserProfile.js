import React from 'react';
import { useState, useEffect } from 'react';
import { storage } from '../firebase-config';
import { ref, uploadBytes, listAll,getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';

function UserProfile() {
  const [imageUpload,setImageUpload]=useState(null);
  const [imageList, setImageList]=useState([]);
  const imageListRef=ref(storage,"images/")

  const uploadImage=()=>{
    if(imageUpload=null) return;
    const imageRef=ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef,imageUpload).then(()=>{
      alert("Image Uploaded");
    });

  };

  useEffect(()=>{
    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageList((prev)=>[...prev,url]);
        })
      })
    })
  });

  return (
    <><div>UserProfile</div><div className='UserProfile'>
      <input type="file" onChange={(event)=>{
        setImageUpload(event.target.files[0]);
      }}/>
      <button onClick={uploadImage}>Upload</button>
    </div></>
  )
}

export default UserProfile
