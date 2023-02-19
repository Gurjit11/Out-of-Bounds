import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'


const Explore = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  // 91a2083997364920824011a7cc29d822

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9ca54059f2fd4116a58df6f76445d0ff&q=india")
      .then((response) => {
        setData(response.data.articles)
      })
  }
  console.log(data)

  useEffect(() => {
    getNews()
  })

  return (
      <div>
      <Navbar/>
      <div className='mt-4 grid grid-cols-2 '>
        <div className='pl-2 mb-2 md:text-3xl font-bold'>
        <div className='mb-2'>BlogEarth</div>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <div className='mt-1 mb-1 font-light md:text-lg'> Our earth is
           the only planet that can sustain humans and other
            living species. The vital substances such as air,
             water, and land make it possible.</div>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <div className='mt-5'>
          Continue Your Journey!
        </div>
        </div>     
        <div className='flex-col justify-center items-center'>
          <div className='flex justify-center items-center'>
        <img className=" rounded-full md:h-[200px] h-[150px]" src='https://i.pinimg.com/originals/75/38/8d/75388da785e0a7363325eb11d05a4c1b.jpg' alt="logo"/>
        </div>
          <div  className='flex justify-center items-center'>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center
         mr-2 mt-2 mb-2"
         onClick={() => {window.location.replace('https://www.earthday.org/india/')}}
         >Donate</button>
          </div>
        </div>
      </div>

      <hr></hr>


        <div className='w-screen grid lg:grid-cols-3 md:grid-cols-2'>
      {data.map((value,pos) => {
    return(
      <div key ={pos} className='w-screen grid lg:grid-cols-3 md:grid-cols-2 '
      >  
      <div className=' m-10 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-2xl shadow-indigo-500/50' 
      style={{backgroundImage: `url('https://media.istockphoto.com/vectors/abstract-square-background-vector-id1153965495?b=1&k=20&m=1153965495&s=170667a&w=0&h=TPpDaNGn5pbeagUw-hNzIZnO6nPwytJdPbwqFsHFObU=')`,
      backgroundSize: 'cover',
    }}>
      <img className = 'rounded-lg' src = {value.urlToImage}></img>
           
        <div className=' bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg'>   
            <div className='text-xl font-semibold m-1 p-1'>
                {value.title}
            </div>

            <div className= 'font-semibold m-1 p-1 text-ellipsis'>
             {value.description}
            </div>
      </div>
            <div className=' '>
            <button type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-1 rounded-md m-1 mt-1 pl-2 pr-2"
             onClick={() => navigate('/blogView')}
             >
            Read More
            </button>
            </div>
          </div> 
    </div>
    );
      })}
  </div>
      </div>
  )
}

export default Explore


    // <div>
    //   <div className='mt-4 grid grid-cols-2 '>
    //     <div className='pl-2 mb-2 md:text-3xl font-bold'>
    //     <div className='mb-2'>BlogEarth</div>
    //     <hr></hr>
    //     <hr></hr>
    //     <hr></hr>
    //     <div className='mt-1 mb-1 font-light md:text-lg'> Our earth is
    //        the only planet that can sustain humans and other
    //         living species. The vital substances such as air,
    //          water, and land make it possible.</div>
    //     <hr></hr>
    //     <hr></hr>
    //     <hr></hr>
    //     <div className='mt-5'>
    //       Continue Your Journey!
    //     </div>
    //     </div>     
    //     <div className='flex-col justify-center items-center'>
    //       <div className='flex justify-center items-center'>
    //     <img className=" rounded-full md:h-[200px] h-[150px]" src='https://i.pinimg.com/originals/75/38/8d/75388da785e0a7363325eb11d05a4c1b.jpg' alt="logo"/>
    //     </div>
    //       <div  className='flex justify-center items-center'>
    //     <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 
    //     font-medium rounded-lg text-sm px-5 py-2.5 text-center
    //      mr-2 mt-2 mb-2">Donate</button>
    //       </div>
    //     </div>
    //   </div>

    //   <hr></hr>