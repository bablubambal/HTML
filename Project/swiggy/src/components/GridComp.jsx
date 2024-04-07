import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'

const GridComp = () => {
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
            <h2 className='font-bold text-2xl'>Restuarants with Online Delivery</h2>
            
        </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-2'>
        {
            data?.map((d,i)=> <FoodCard key={i}  {...d} />)
        }
        {/* <FoodCard/> */}
        

    </div>
  
</div>

  )
}

export default GridComp
