import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '/error 404/sadEmote.png'

function error() {

    const navigate = useNavigate()

    setInterval(() => {
        navigate('/')
    }, 4000)

    return (
        <div className="text-white text-center  font-bold w-full h-dvh flex flex-col items-center justify-center">
            <p className='text-3xl md:text-8xl'>404 Not Found</p>
            <p className='text-2xl'>We are redirecting!</p>

            <div className="fixed bottom-0 m-20 w-16 h-16 border-8 border-gray-900 border-t-purple-500 rounded-full animate-spin"></div>

            <img className="w-70 drop-shadow-lg " src={Image} alt="" />
        </div>
    )
}

export default error
