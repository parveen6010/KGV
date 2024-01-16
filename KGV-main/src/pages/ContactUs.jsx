import { useState } from "react"
import React from 'react'


 export const ContactUs=()=> {
  

  // student or instructor

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    query:""
  })



  const { firstName, lastName, email, address, query } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    
  }



  return (
    <div className="w-full overflow-hidden   h-screen bg-black  ">
    
    <div className=" flex-col  items-center mx-auto max-w-[1240px] w-11/12">

    <h1 className=' text-5xl font-inter text-[#3EC70B] font-bold pt-16  
    text-transparent  bg-clip-text bg-gradient-to-r
     from-[#6beb03] to-[#e6f604] text-center'>
     Get in Touch!!</h1>
     
    <div class="flex  items-center justify-center rounded-lg font-inter max-w-[420px]  mx-auto mt-14 ">
     <div class="  w-full rounded-md bg-gradient-to-r  from-[#6beb03] to-[#e0ef0d] p-1 ">
        <div class=" px-5 py-2 flex flex-col h-full w-full bg-white  font-inter  ">
         {/* Form */}
    <form onSubmit={handleOnSubmit} className="flex h-full  flex-col gap-y-4 font-inter  ">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] black">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-black  p-[12px] text-white "
            />
          </label>
          <label>
            <p className="mb-1 font-semibold text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-black p-[12px] text-white "
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-black p-[12px] text-white"
          />
        </label>
        <div >
          
          <label className="relative">
            <p className="mb-1 text-[0.875rem] font-semibold leading-[1.375rem] text-richblack-5">
              Query <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="query"
              value={query}
              onChange={handleOnChange}
              placeholder="Enter query"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-black p-[12px] pr-10 text-white"
            />
            
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-gradient-to-r  from-[#6beb03] to-[#e0ef0d] p-1 py-[8px] px-[12px] font-medium text-black"
          onClick={handleOnSubmit}     
        >
          submit
        </button>
      </form>
        </div>
    </div>
</div>

   

    </div>
      
    </div>
  )
}

