import React, { useEffect, useState } from 'react'

const Gallerview = () => {
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
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">


     {data?.map(data=>{
        return (
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={`http://localhost:5000/images/`+data.image} />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
        )
     })}
  
    </div>
  </div>
</section>
  )
}

export default Gallerview
