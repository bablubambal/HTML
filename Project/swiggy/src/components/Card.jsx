import React from 'react'

import { FaStar } from "react-icons/fa";
const Card = (props) => {
  return (
   <>
   <div className=' rounded-lg bg-gray-300 shadow-lg  '>
    <div className=' h-[170px]'>
   <img className='object-cover w-full h-full' src={`http://localhost:5000/images/`+props.image} alt="" />
       
    </div>
    <div className='bg-white text-black font-bold'>
        <span className='font-bold'> Name: {props.name}</span> <br />
        <span>{props.title}</span> <br />
        <p className='flex  items-center'> <FaStar className='inline'/> {props.rating}</p> <br />
        <p>Min Time: {props.minTime}</p>
 
    </div>
   </div>
   </>
  )
}

export default Card
