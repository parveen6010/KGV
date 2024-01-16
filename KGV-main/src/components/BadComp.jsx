import React from 'react'

export const BadComp = () => {
  return (
    <div class="flex  items-center justify-center rounded-lg">
     <div class="  w-full rounded-md border-black border-2   ">
        <div class=" px-5 py-2 flex flex-col justify-center items-center  h-full w-full bg-white text-black font-inter  ">
         <div className='text-2xl py-8 font-bold '>Petrol </div>
         <div className='w-full h-1 bg-black   '>
         </div>

         <div className='flex-col gap-10 px-3 py-5 text-xl'>
          <p> Running cost of 10* Rs/km </p>
          <p> High Risk of fire </p>
          <p> Carbon emission is High </p>
          <p> Engine noise while running is high</p>
         </div>

        </div>
     </div>
    </div>
  )
}
