  import React from 'react'
  import logo from "../resource/kgvLogo.png"
  import bike from "../resource/bike_main.png"
  import { Footer } from '../components/Footer'
  import wave from "../resource/wave_final.png"
  import { Book } from '../components/Book'
  import { Button2 } from '../components/Button2'


  export const Home = () => {
    return (
      <div className='w-full h-screen '>
      {/* hero page */}
      <div className='w-11/12 mx-auto max-w-[1204px]  h-screen flex relative wrapper  justify-center items-center  '>
        
        <img src={bike} className='absolute   scale-125  bottom-[15%]  ' />
        <div className='uppercase  font-extrabold text-transparent  text-[17rem] tracking-widest  bg-clip-text bg-gradient-to-r from-[#55E422] via-[#53E320] to-[#55E422] bg-opacity-20 text_properties'>ENERGY</div>
        <div className='absolute top-[20%] text-4xl font-extrabold uppercase  '>Welcome to the world of smart E-MOBILITY solution </div>
      </div>

      <div className='w-full h-screen flex flex-col justify-center relative items-center    '>
      <img src={wave} className='w-full absolute h-full top-0'/>
      <div className='flex flex-col  justify-center    h-full column   items-center  '>
        <div className='text-4xl font-bold text-center  -mt-6   '>About us </div>
        <div className='text-center '>rhgkjdrgklfjildgljlkfjl </div>
        <div className='flex  justify-center items-center gap-2'>
          <Book/>
          <Button2/>
        </div>
      </div>
      
    
      </div>
    
      <Footer/>
      </div>
    )
  }
