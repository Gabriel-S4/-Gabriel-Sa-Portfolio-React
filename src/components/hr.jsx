import React from 'react'

function hr({size}) {
    return (
        <div className='h-[1px] w-full flex justify-center mt-5'>
            <div className="h-full w-[80%] md:w-[50%] bg-amber-50/20 rounded-4xl" style={{width: size}}></div>
        </div>
    )
}

export default hr
