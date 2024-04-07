import React, { useEffect, useState } from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
const HeroSection = () => {
  const [slide, setSlide] = useState(0)
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

    const slidePrevious = ()=>{
      if(slide ==0 ) return false;
      setSlide(slide-3)

    }
    const slideNext = ()=>{
      console.log(categories.length)
      if(categories.length-8 == slide ) return false;
      setSlide(slide+3)
    }
  return (
    <div className='mx-auto max-w-[1020px]'>
      <div className='mt-5 flex justify-between'>
        <h2 className='font-bold text-2xl'>What's on your mind?</h2>
        <div className='flex gap-2'>
            <div className='cursor-pointer h-[25px] w-[25px] bg-[#E2E2E7] rounded-full flex justify-center items-center'>
                <FaArrowLeft onClick={slidePrevious}/>
            </div>
            <div className='cursor-pointer h-[25px] w-[25px] bg-[#E2E2E7]  rounded-full flex justify-center items-center'>
                <FaArrowRight onClick={slideNext}/>
            </div>
            
            

        </div>
      </div>

      <div className='flex border-3 overflow-hidden ' >
        {
            categories?.map((cat,index)=>{
                return (
                  <div className='w-[140px] shrink-0 duration-500 '  key={index} style={{
                    transform: `translateX(-${slide*100}%)`,
                  }}>
                   <img    src={`http://localhost:5000/images/`+cat.image} alt="" />
</div>
                )
            })
        }
     
       
      </div>
      <hr />
    </div>
  )
}

export default HeroSection
