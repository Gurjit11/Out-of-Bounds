import React from 'react'
// import Blogcard from '../Components/Blogcard';
import { useState , useEffect } from 'react';
import Blogcard from '../Components/Blogcard';

function Explore() {

const [data , setData] = useState([]);

useEffect( () => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((result) => {
    result.json().then((resp)=>{
      console.log("result" , resp)
      setData(resp)
    })
  })
},[])

console.log(data)
  
  const blogCards = (props) => {
     return <div>{props.item.title}</div>
  }

  return (
    <div>

      explore
    </div>
      //  <div className='w-screen grid lg:grid-cols-3 md:grid-cols-2'>
      //   { 
      //    data && data.slice(0,7).map((item,pos) => {
      //     //  <Blogcard key={pos} title={item.title} content={item.content} description={item.description} image={item.urlToImage}/>
      //     blogCards(item,pos)
      //   })}
      //  </div>
  );
}

export default Explore