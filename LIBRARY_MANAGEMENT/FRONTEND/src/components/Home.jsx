import React from 'react'
import BannerCard from './BannerCard'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  function handleClick() {
    navigate('/dashboard')
  }
  return (
    <div className=' jusify-between items-center px-[8rem] bg-teal-100 h-[52rem] '>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 '>
          <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl front-bold leading-snug text-black'>You can get all Books here<span className='text-blue-700'>It's your Library</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem magnam, provident praesentium vitae beatae placeat expedita impedit, ratione dolores natus non doloremque doloribus repudiandae vero laboriosam cupiditate? Eius placeat, ab accusamus autem nemo rerum unde porro? Ratione numquam quidem aliquam.</p>
            <div>
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'onClick={handleClick}>Get Started</button>
            </div>

          </div>
          <div>
            <BannerCard/>
          </div>
        </div>

        {/* <div className='w-full h-[20rem] bg-red-100'>
          <FavoriteBooks />
        </div>
          */}
    </div>
  )
}

export default Home