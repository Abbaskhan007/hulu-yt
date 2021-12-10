import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

export default function Header() {
    return (
        <header className='flex flex-col m-5 sm:flex-row sm:space-x-12 space-y-2 justify-between items-center'>
            <div className='flex flex-row  justify-between flex-grow max-w-2xl'>
                <HeaderItem text='HOME' Icon={HomeIcon} />
                <HeaderItem text='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem text='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem text='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem text='SEARCH' Icon={SearchIcon} />
                <HeaderItem text='ACCOUNT' Icon={UserIcon} />
                
            </div>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAe1BMVEX///8AvRIAuQAAuADc890AvANHx0yc3Z75/fnA6cG96L6r4q3K7MtWyloZwCIAtQDh9OLr+Ozz+/Ok4KbX8djF68Y2xDyV25iB1YRZy12M2I625rhnzmt20nk/xURv0HIowS8uwjRgzWSw5LLP7dB6031OyFNrz26J14yARopUAAAEdklEQVR4nO2d4VraMBRA08Q4FFcQFEUcbM7J3v8J56Y4bO9Nc2njvm+c85fm9vY0pG2Sps4BAAAAAAAAAAAAAAAAAAAAAAAAAPy3TE9ELv91XinklE9mxXe8CF5gclN8xz2YSCn7yXnxHZ/GSsB/Kr7jHngp5cqfFd8xsgwgywCyDCDLALIMIMsAsgwgywCyDCDLALIMIMsAsgwgywCyDCDLALIMIMsAsgwgywCyDCDLALIMIMsAsgwgywCyDHTIGjUwRG4W7YyQXSBbljmFjhKKrLk7u13HIBC/Lm/HV92u5hOpdIh6CbnA5PpwWWLAMFmpKdzIOSySsqo6+Cj/UsUYvffLcUctG8uHVOslFAcXh8uSj8Drc5M+iaHjaVpWJ9GH+2T9Qtb7GOFpiqxsYrhFVj7+qzb7FFlCIK+0XMiSCLItZMk7F/+JyBKJ35CVj/gkiSyFINzNI0vB3yErH+HxGFkavt01gCyN+ANZBpCVT2i97IcslfYhIUvFj49clm++5BrkLP/Ea91pHZWsWK+a7dBsVatbfzlmWfFBjHavVK725kckK66VcJ+V7ZdHLCtoQxEjOdP4+Xhlvf3c5otc4JhlCd0Ir3yX4x2xrMTEkHNkNeMha//gkIUsZCELWchCFrKQhSxkIatbVmJqd5APbXhZiand6T6Yj5bVHjPbcfVRNSvqE2GX/0iW3JWTiCx3lFX+cWhZeu2eyZU7PpWWJW+nzRN07kJOtBLmrGbLquWQwmSDF56Uqrg7uGKyrrWhjUq0da24qny7gztb1kKpWtIUKZcYjdmWlqU0Qb8nz981j3/0+KC5khq5bFlyE/R728V1c/5dapxv18gVk6X8//9s7JtvEnl9qDe0U8iWdauGbaeQGEH289KylEOyIs3uzZY1HyaHt9ln5WQpraWR9lC3QdbFMLLCrpUtJ+tumDmF33vIGulNgYW3W41ysoY5rdJob7Ystx7ihMVNeVnDNFrSs2S+LPlZz8jfZ8mCspRbchNRWsU/X9blEP/Dv9fjgrKuBsg0SHew+bKGuMrsXWIKyhqgxZAnPhlkPfY/YXutZklZJ70zlSfzGGT1r1r756ukLLfp++bnRopqktW71dpvCIrK0vpIcvHycggWWX3v4v3+FaasrGmv8xraL7nYZbmHPrbiYj9UWVl6z0sGSkeKeS2aPteZ+K7Po7CsHrb8VglpXrjn9OC61bjAlJblTrRlWjrQXdlXOdocdsZis+OxuCw3ejog1RgSH+Ayy3KrRIeZiq+bd8TlZT0XidZcfWwPU/SR5UbbYEwhhnbn0EfIcm5cGXRF79PfdTtA1vOF+T7VH9vKIayF5So+RpZzFxvv1VWm3pkK9bxjtamDZDk3m6/1ha72U3jOYSvWbPMn+1biB/OCPnH+jav5ZuGDuL9dlFBv54mVk145/JN9s7O7ZR1SOYQQT38q93f2j0HO5ALdh/jC6FLZ43OIaebnHPt+DHI21XO4tKzUBwAAAAAAAAAAAAAAAAAAAAAAAADwH/ALGARpMvK3J2YAAAAASUVORK5CYII=" className='object-contain' width={200} height={100} />    
             
        </header>
    )
}
