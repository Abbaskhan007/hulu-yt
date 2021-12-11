import React from 'react'

export default function HeaderItem({Icon, text}) {
    return (
        <div className='group  flex flex-col items-center w-14 cursor-pointer hover:mx-5'>
            <Icon className='w-8 mb-1 group-hover:w-12 group-hover:animate-bounce '/>
            <p className='tracking-widest opacity-0 group-hover:opacity-100'>{text}</p>
        </div>
    )
}
