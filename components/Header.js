import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

export default function Header() {
    return (
        <header className='flex flex-col m-5 sm:flex-row sm:space-x-12 space-y-2 justify-between items-center'>
            <div className='flex flex-row  justify-between items-center flex-grow max-w-2xl'>
                <HeaderItem text='HOME' Icon={HomeIcon} />
                <HeaderItem text='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem text='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem text='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem text='SEARCH' Icon={SearchIcon} />
                <HeaderItem text='ACCOUNT' Icon={UserIcon} />
                
            </div>
            <h2 className='font-bold racking-widest text-3xl sm:pb-8 sm:mb-1'>Hulu</h2>
           
        </header>
    )
}
