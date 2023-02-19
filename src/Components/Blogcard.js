import React from 'react'
import BlogView from '../pages/BlogView'
import { useNavigate } from 'react-router-dom'

const Blogcard = () => {
    let navigate = useNavigate()
    const openBlog = (title) => {
        navigate('/blogView');
    }

    const title = ' title'
    const description =`A blog is aqa website or page 
    that is a part of a larger website. Typically
    , it features articles written in a conversational
     style with accompanying`
  return (
      <div className='w-screen grid lg:grid-cols-3 md:grid-cols-2 '
      >
        
      <div className=' m-10 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-2xl shadow-indigo-500/50' 
      style={{backgroundImage: `url('https://media.istockphoto.com/vectors/abstract-square-background-vector-id1153965495?b=1&k=20&m=1153965495&s=170667a&w=0&h=TPpDaNGn5pbeagUw-hNzIZnO6nPwytJdPbwqFsHFObU=')`,
      backgroundSize: 'cover',
              }}>
      <img className = 'rounded-lg' src = 'https://static.wixstatic.com/media/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png'></img>
           
        <div className=' bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg'>   
            <div className='text-xl font-semibold m-1 p-1'>
                Title
            </div>

            <div className= 'font-semibold m-1 p-1 text-ellipsis'>
             {description}
            </div>
      </div>
            <div className=' '>
            <button type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-1 rounded-md m-1 mt-1 pl-2 pr-2"
            onClick={() => openBlog(title)}
            >
            Read More
            </button>
            </div>
          </div>  


          <div className=' m-10 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-2xl shadow-indigo-500/50' 
      style={{backgroundImage: `url('https://media.istockphoto.com/vectors/abstract-square-background-vector-id1153965495?b=1&k=20&m=1153965495&s=170667a&w=0&h=TPpDaNGn5pbeagUw-hNzIZnO6nPwytJdPbwqFsHFObU=')`,
      backgroundSize: 'cover',
              }}>
      <img className = 'rounded-lg' src = 'https://static.wixstatic.com/media/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png'></img>
           
        <div className=' bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg'>   
            <div className='text-xl font-semibold m-1 p-1'>
                Title
            </div>

            <div className= 'font-semibold m-1 p-1 text-ellipsis'>
             {description}
            </div>
      </div>
            <div className=' '>
            <button type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-1 rounded-md m-1 mt-1 pl-2 pr-2"
            onClick={() => openBlog(title)}>
            Read More
            </button>
            </div>
          </div>  


          <div className=' m-10 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-2xl shadow-indigo-500/50' 
      style={{backgroundImage: `url('https://media.istockphoto.com/vectors/abstract-square-background-vector-id1153965495?b=1&k=20&m=1153965495&s=170667a&w=0&h=TPpDaNGn5pbeagUw-hNzIZnO6nPwytJdPbwqFsHFObU=')`,
      backgroundSize: 'cover',
              }}>
      <img className = 'rounded-lg' src = 'https://static.wixstatic.com/media/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png'></img>
           
        <div className=' bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg'>   
            <div className='text-xl font-semibold m-1 p-1'>
                Title
            </div>

            <div className= 'font-semibold m-1 p-1 text-ellipsis'>
             {description}
            </div>
      </div>
            <div className=' '>
            <button type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-1 rounded-md m-1 mt-1 pl-2 pr-2"
            onClick={() => openBlog(title)}>
            Read More
            </button>
            </div>
          </div>  


          <div className=' m-10 p-10 rounded-md bg-slate-100 shadow hover:drop-shadow-2xl shadow-indigo-500/50' 
      style={{backgroundImage: `url('https://media.istockphoto.com/vectors/abstract-square-background-vector-id1153965495?b=1&k=20&m=1153965495&s=170667a&w=0&h=TPpDaNGn5pbeagUw-hNzIZnO6nPwytJdPbwqFsHFObU=')`,
      backgroundSize: 'cover',
              }}>
      <img className = 'rounded-lg' src = 'https://static.wixstatic.com/media/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png'></img>
           
        <div className=' bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg'>   
            <div className='text-xl font-semibold m-1 p-1'>
                Title
            </div>

            <div className= 'font-semibold m-1 p-1 text-ellipsis'>
             {description}
            </div>
      </div>
            <div className=' '>
            <button type="button" className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-red-400 hover:to-yellow-400 text-white p-1 rounded-md m-1 mt-1 pl-2 pr-2"
            onClick={() => openBlog(title)}>
            Read More
            </button>
            </div>
          </div>  
    </div>  
  )
}

export default Blogcard