import React from 'react'
import Thumbnail from './Thumbnail'
import { forwardRef } from 'react';

const Result = forwardRef(({data},ref) =>  {
    return (
        <div ref={ref} className='sm:grid md:grid-cols-2 xl:grid-cols-3 px-5 my-10 3xl:flex flex-wrap justify-center'>
            {data.results.map(movieData=>(
                <Thumbnail key={movieData.key} movieData={movieData}/>
            ))}

        </div>
    );
})

Result.displayName = 'Result';

export default Result;