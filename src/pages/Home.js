
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import HomeNavbar from '../Components/HomeNavbar'
// import ReactGlobe from 'react-globe';
import Globe from 'react-globe.gl';

const Home = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  // 91a2083997364920824011a7cc29d822
  // 84e7ffa4e6b7461db4800fa9eb4af383

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=91a2083997364920824011a7cc29d822&q=india")
      .then((response) => {
        setData(response?.data?.articles)
      })
  }
  console.log(data)

  useEffect(() => {
    getNews()
  }, [])
  

  return (
    <div className='w-screen'>
      <HomeNavbar />
      <div className='mt-4 grid grid-cols-2 '>
        <div className='pl-2 ml-6 my-[70px] flex flex-col justify-center items-start md:text-3xl font-bold'>
          <div className='mb-0'>BlogEarth</div>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <div className='mt-0 mb-1  font-light md:text-lg'> 
          Blog Earth is a website that hosts a collection of blogs on a wide range of topics, including technology, business, provides a platform for writers and bloggers to share their expertise and insights with a global audience. With tips for healthy living, or insights into the latest tech trends
          </div>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <div className='mt-8'>
            Start Your Journey Now!
          </div>
        </div>
        <div className='flex-col justify-center items-center'>
          <div className='flex justify-center items-center z-0  rounded-full md:h-[300px] h-[150px]'>
            <Globe height={430} width={430} showAtmosphere={true} globeImageUrl={"//unpkg.com/three-globe/example/img/earth-day.jpg"} backgroundImageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png"}/>
            {/* <img className=" rounded-full md:h-[200px] h-[150px]" src='https://i.pinimg.com/originals/75/38/8d/75388da785e0a7363325eb11d05a4c1b.jpg' alt="logo"/> */}
          </div>
          <div className='flex justify-center items-center'>
            <button type="button" className="text-white absolute z-5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center
         mr-2 mt-2 mb-2"
              onClick={() => { window.location.replace('https://www.earthday.org/india/') }}
            >Donate</button>
          </div>
        </div>
      </div>

      <hr></hr>


      <div className=' grid lg:grid-cols-3 md:grid-cols-2'>
        {data.map((value, pos) => {
          return (
            <div key={pos} className='w-screen grid lg:grid-cols-3 md:grid-cols-2 '
            >
              <div className=' m-10 p-10 rounded-md bg-slate-100 shadow  shadow-indigo-500/50'
                style={{
                  backgroundImage: `url('https://media.istockphoto.com/vectors/abstract-square-background-vector-id1153965495?b=1&k=20&m=1153965495&s=170667a&w=0&h=TPpDaNGn5pbeagUw-hNzIZnO6nPwytJdPbwqFsHFObU=')`,
                  backgroundSize: 'cover',
                }}>
                <img className='rounded-lg' src={value.urlToImage}></img>

                <div className=' bg-white bg-opacity-30  rounded '>
                  <div className='text-xl font-semibold m-1 p-1'>
                    {value.title}
                  </div>

                  <div className='font-semibold m-1 p-1 text-ellipsis'>
                    {value.description}
                  </div>
                </div>
                <div className=' '>
                  <button type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-1 rounded-md m-1 mt-1 pl-2 pr-2"
                    onClick={() => navigate('/login')}
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

export default Home



