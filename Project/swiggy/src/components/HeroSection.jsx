import React, { useEffect, useState } from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
const HeroSection = () => {
    const [categories,setCategories] = useState();

    const fetchCategories = async () => {
        let resp = await fetch('http://localhost:5000/categories')
        let data = await resp.json()

        // console.log(data)
        setCategories(data)
    }


    useEffect(()=>{
        fetchCategories()

    },[])
  return (
    <div className='mx-auto max-w-[1020px]'>
      <div className='mt-5 flex justify-between'>
        <h2 className='font-bold text-2xl'>What's on your mind?</h2>
        <div className='flex gap-2'>
            <div className='h-[25px] w-[25px] bg-[#E2E2E7] rounded-full flex justify-center items-center'>
                <FaArrowLeft/>
            </div>
            <div className='h-[25px] w-[25px] bg-[#E2E2E7]  rounded-full flex justify-center items-center'>
                <FaArrowRight/>
            </div>
            
            

        </div>
      </div>

      <div className='flex overflow-hidden' >
        {
            categories?.map((cat,index)=>{
                return (
                    <img  key={index} className='h-[150px]'  src={`http://localhost:5000/images/`+cat.image} alt="" />
                )
            })
        }
     
      
       
      </div>
      <hr />
    </div>
  )
}

export default HeroSection
