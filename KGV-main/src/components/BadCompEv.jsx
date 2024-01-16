import React from 'react'

export const BadCompEv = () => {
  return (
    <div class="flex  items-center justify-center rounded-lg">
     <div class="  w-full rounded-md border-black border-2   ">
        <div class=" px-5 py-2 flex flex-col h-full w-full bg-white text-black font-inter justify-center items-center ">
         <div className='text-2xl py-8 font-bold '>EV </div>
         <div className='w-full h-1 bg-black   '>
         </div>

         <div className='flex-col gap-10 px-3 py-5 text-xl '>
          <p> Cost of owning a vehicle is High</p>
          <p> Limited drive range </p>
          <p> Weaker fibre body</p>
          <p> Less reliable,fear of run out</p>
         </div>

        </div>
     </div>
    </div>
  )
}
