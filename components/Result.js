import React from 'react'
import Thumbnail from './Thumbnail'
import { forwardRef } from 'react';

const Result = forwardRef(({data},ref) =>  {
    console.log('Results',data.results)
    return (
        <div ref={ref} className='sm:grid md:grid-cols-2 xl:grid-cols-3 px-5 my-10 3xl:flex flex-wrap justify-center'>
            {data.results.map(movieData=>(
                <Thumbnail movieData={movieData}/>
            ))}

        </div>
    );
})

export default Result;