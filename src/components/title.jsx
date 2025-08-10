import React from 'react'

const title = ({ children }) => {
  return (
    // bg-[var(--purple-light)]
    // Shine animation
    // animate-[shine_2s_infinite] [mask-image:linear-gradient(-75deg,rgba(0,0,0,0.8)_30%,#000_50%,rgba(0,0,0,0.8)_70%)] [mask-size:200%]
    // <div className='flex items-center justify-center p-[20px] rounded-[50px]  cursor-default shadow-[0px_5px_10px_rgba(0,0,0,0.507)]'>
    //     <h2 className=' text-[45px] font-bold text-left cursor-default relative bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent'>{children}</h2>
    // </div>
    <h1 className='z-5 text-center p-4 font-semibold text-6xl md:text-8xl bg-gradient-to-r from-white to-purple-200 bg-clip-text animate-[shine_2s_infinite] [mask-image:linear-gradient(-75deg,rgba(0,0,0,0.8)_30%,#000_50%,rgba(0,0,0,0.8)_70%)] [mask-size:200%] text-transparent cursor-default'>
      {children}
    </h1>

  )
}

export default title
