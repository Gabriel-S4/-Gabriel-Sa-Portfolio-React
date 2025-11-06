import React from 'react'
import logo from '/my-notion-face-transparent.png'

function hero() {
  return (
    <div id='home' className='w-full min-h-dvh relative before:z-5 before:absolute before:w-full before:bottom-0 before:h-30 sm:before:h-40 before:bg-gradient-to-b before:from-transparent before:to-(--purple-dark-dark) '>
      <div className='my-5 md:m-0 p-2 sm:p-5 flex items-center justify-center flex-col-reverse lg:flex-row-reverse w-full h-full absolute z-2'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-[var(--h1-color)] lg:text-[100px]  text-5xl sm:text-6xl font-bold mb-2 italic text-shadow-[var(--shadow-purple)] cursor-default'>Gabriel Sá</h1>
          <p className='text-white font-medium text-[16px] sm:text-[20px] lg:text-[22px] max-w-[500px] text-center text-shadow-[var(--shadow-purple)] cursor-default'>
            Computer Engineering student, <span className='text-nowrap'> Front-End </span> Developer, Designer & Video editor.
          </p>
        </div>
        <div className='max-w-[300px] sm:max-w-[500px] slide-in'>
          <img className='filter drop-shadow-[0_0_30px_rgba(66,0,128,0.32)] ' src={logo} alt=""></img>
        </div>
      </div>
      <div className='w-full h-screen absolute opacity-25 z-1 '>
        <video playsInline webkit-playsinline="true"  controls={false} autoPlay muted loop className='w-full h-full object-cover object-center'>
          <source src="/hero/python-editor.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='w-full h-screen absolute bottom-0 bg-black/50'>
      </div>
    </div>
  )
}

export default hero
