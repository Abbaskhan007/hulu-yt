import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router'
export default function NavBar() {
    const router = useRouter();
    return (
        <nav className='relative'>
        <div className='flex flex-row items-center overflow-x-scroll scrollbar-hide text-2xl px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20'>
            {Object.entries(requests).map(([key,{title, url}])=>(
                <h2 onClick={()=> router.push(`/?genre=${key}`)} className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500' key={key}>{title}</h2>
            ))}
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
        </div>
        </nav>
    )
}
