import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Result from './Result'

export default function Thumbnail({movieData}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image src={`${BASE_URL}${movieData.backdrop_path || movieData.poster_path}`} layout='responsive' height={1080} width={1920}/>
            <div>
                <p className='truncate max-w-md mt-2'>{movieData.overview}</p>
                <p className='text-2xl text-white mt-1 transition-all duration-100 ease-in-out group-hover:font-bold'>{movieData.title || movieData.original_name} </p>
                <p className='flex items-center opacity-0 group-hover:opacity-100 '>
                    {movieData.release_date || movieData.first_air_date} .{" "}
                    <ThumbUpIcon className='h-5 mx-2'/>
                    {movieData.vote_count}
                </p>
            </div>
        </div>
    )
}
