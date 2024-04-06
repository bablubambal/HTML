import React, { useState , useEffect} from 'react'
import Card from './Card'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
const Main = () => {
    const [data,setData] =  useState()

    

    const fetchData = async () => {
        let resp = await fetch('http://localhost:5000/top-restaurant-chains')
        let data = await resp.json()

        console.log(data)
         setData(data)
    }


    useEffect(()=>{
        fetchData()

    },[])
  return (
    <div className=' mt-[50px] mx-auto max-w-[1020px]'>
  <div className='mt-5 flex justify-between mb-2'>
        <h2 className='font-bold text-2xl'>Top restaurant chains in Hyderabad</h2>
       
      </div>
        <div>
        <div className='grid grid-cols-4 gap-2' >
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

export default Main
