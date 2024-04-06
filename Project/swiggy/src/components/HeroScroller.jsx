import React, { useState , useEffect} from 'react'
import Card from './Card'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
const HeroScroller = () => {
    const [data,setData] =  useState()

    

    const fetchData = async () => {
        let resp = await fetch('http://localhost:5000/top-restaurant-chains')
        let data = await resp.json()

        console.log(data)
        data.splice(0, 6);

         setData(data)
    }


    useEffect(()=>{
        fetchData()

    },[])
  return (
    <div className=' mt-[50px] mx-auto max-w-[1020px]'>
 <div className='mt-5 flex justify-between mb-2'>
        <h2 className='font-bold text-2xl'>Top restaurant chains in Hyderabad</h2>
        <div className='flex gap-2'>
            <div className='h-[25px] w-[25px] bg-[#E2E2E7] rounded-full flex justify-center items-center'>
                <FaArrowLeft/>
            </div>
            <div className='h-[25px] w-[25px] bg-[#E2E2E7]  rounded-full flex justify-center items-center'>
                <FaArrowRight/>
            </div>
            
            

        </div>
      </div>
        <div>
        <div className='flex gap-4 ' >
        {
            data?.map((data,index)=>{
                return <Card key={index} {...data} />
            })
        }
     
      
       
      </div>
      <hr />
        </div>
      
    </div>
  )
}

export default HeroScroller
