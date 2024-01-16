import React from 'react'
import { Book } from './Book'
import { Button2 } from './Button2'
import logo from "../resource/kgvLogo.png"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-screen bg-black pl-20 pr-8 pt-16 pb-16'>
    <div className='w-11/12 max-w-[1240px]   flex justify-between'>
    <div ><Link to={"/"}><img src={logo} className='w-[60px] h-[60px]'/></Link></div>
          <div className='flex justify-center items-center  gap-10 h-28 mb-8 ' >
             {/* col1 */}
              <div className='text-white '>
                <div className='font-semibold  '>Mobile App</div>
                <div>Features</div>
                <div>Live Chat</div>
                <div>Share</div>
                
                
              </div>

              {/* col2 */}
              <div className='text-white '>
              <div className='font-semibold  '>Community</div>
                <div>Featured Riders</div>
                <div>User Stories</div>
                <div>Feedback</div>
              </div>

              {/* col 3 */}
              <div className='text-white '>
                <div className='font-semibold  '>Company</div>
                <div>About us</div>
                <div>Home</div>
                <div>Careers</div>
              </div>

              {/* col4 -> buttons*/}
              <div className='flex-col items-center justify-center  gap-10 '>
                <Button2/>
              </div>
          </div>
    </div>
    <div className='w-full rounded-md bg-gradient-to-r  from-[#6beb03] to-[#e0ef0d]  h-[1px] '></div>

    </div>
  )
}
