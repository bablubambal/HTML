 import React, { useState } from 'react'
 import { FaChevronDown } from "react-icons/fa";
 import { CiSearch } from "react-icons/ci";
 import { BiSolidOffer } from "react-icons/bi";
 import { IoHelpBuoyOutline } from "react-icons/io5";
 import { FaRegUser } from "react-icons/fa";

 const Header = () => {
    const [toogle,setToggle] = useState(false)


    const links = [
     
        {
            name: "Search",
            icon: <CiSearch className='inline'/>
        },
        {
            name: "Offer",
            icon: <BiSolidOffer className='inline'/>,
            sup: 2
        },
        {
            name: "Help",
            icon: <IoHelpBuoyOutline className='inline'/>
        },
        {
            name: "SignIn",
            icon: <FaRegUser className='inline'/>
        }
        
       
    ]

   return (
    <>
    <div className='black-overlay h-full w-full fixed duration-500 z-[99999]' style={{
        opacity: toogle ? 1: 0,
        visibility: toogle ? 'visible' : 'hidden'
    }} onClick={()=> setToggle(false)}>
        <div className='w-[400px] h-full bg-white absolute duration-[600ms]'
        style={{
            left: toogle ? '0%': '-100%'
        }}
        onClick={(e)=> e.stopPropagation()}
        ></div>
    </div>
     <header className='p-3 bg-white shadow-xl'>
      <div className='mx-auto max-w-[1020px]  flex justify-between items-center'>
        <div className='w-[100px] flex  justify-center  items-center'>
            <img  className='w-full h-full' src="logo.png" alt="" />
            <p className='text-black-500  border-b-2 border-slate-500'>Others</p>
           <span className='text-[#fc8019]' onClick={()=> setToggle(true)}> <FaChevronDown /></span>
        </div>
        <div>
            <nav>
                <ul className='flex  '>
                    {/* <li className='mx-4'>
                    <CiSearch className='inline' />
                        Search</li>
                    <li className='mx-4'> <BiSolidOffer className='inline'/> Offers</li>
                    <li className='mx-4'> <IoHelpBuoyOutline className='inline'/> Help</li>
                    <li className='mx-4'>SignIn</li> */}
                    {
                        links?.map((link,index)=>{
                            return(
                                <li className='mx-4'> {link.icon}
                                <span className=' mx-1 font-semibold hover:text-[#fc8019]'>{link.name} <sup>{link.sup}</sup></span> 
                                 </li>  
                            )
                        })
                    }
                </ul>
            </nav>
        </div>

      </div>
     </header>
    </>
   )
 }
 
 export default Header;
 