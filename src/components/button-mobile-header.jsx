import { React, useEffect, useRef, useState } from 'react'
import { X, Menu } from 'lucide-react'

function buttonmobileheader() {

    const bgheader = useRef(null);
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (bgheader.current) {
            if (isVisible) {
                bgheader.current.style.background = 'rgba(0, 0, 0, 0.8)'

            } else {
                bgheader.current.style.background = 'transparent'
            };
        };
    }, [isVisible]);

    const menumobile = () => {
        setIsVisible(prev => !prev)
    }

    const menu = [
        {
            title: 'Home',
            href: '#home'
        },
        // {
        //     title: 'Services',
        //     href: '#services'
        // },
        {
            title: 'About Me',
            href: '#about'
        },
        {
            title: 'Projects',
            href: '#projects'
        },
        {
            title: 'Contact',
            href: '#contact'
        },
    ]

    return (
        <>
            <div ref={bgheader} className='flex flex-col w-full h-full md:hidden'>
                <div className="w-full h-full pr-[40px] pt-[40px] flex flex-row-reverse md:hidden ">
                    {isVisible ? (
                        <button onClick={menumobile} className='h-[40px] w-[40px] cursor-pointer button-menu-header'>
                            <X className='h-[40px] w-[40px] text-white transition-all duration-500 drop-shadow-[0_0_10px_white]'></X>
                        </button>
                    ) : (
                        <button onClick={menumobile} className='h-[40px] w-[40px] flex flex-col items-center justify-center gap-[5px] bg-transparent border-0 cursor-pointer button-menu-header'>
                            <Menu className=' h-[40px] w-[40px] text-white transition-all duration-500 drop-shadow-[0_0_10px_black]'/>
                        </button>
                    )}

                    {/* <button onClick={menumobile} className='px-[40px] py-8 md:hidden flex flex-col items-center justify-center gap-[5px] bg-transparent border-0 cursor-pointer button-menu-header'>
                        <div className='block h-[5px] w-[30px] rounded-[25px] bg-white transition-all duration-500 shadow-[0_0_10px_black] bar' id="bar1"></div>
                        <div className='block h-[5px] w-[30px] rounded-[25px] bg-white transition-all duration-500 shadow-[0_0_10px_black] bar' id="bar2"></div>
                        <div className='block h-[5px] w-[30px] rounded-[25px] bg-white transition-all duration-500 shadow-[0_0_10px_black] bar' id="bar3"></div>
                    </button> */}
                </div>

                {isVisible && (
                    <div className='translate-y-[10px] border-b-1 border-[rgba(40,40,40,1)] py-4 w-full showModal bg-black/80 md:hidden flex flex-col gap-5'>
                        {
                            menu.map((e, index) => (e.href && e.title &&
                                (
                                    <a key={index} className='text-end w- px-7 hover:animate-in  font-[Montserrat] font-medium text-[20px] text-white no-underline transition-all duration-500 hover:-translate-y-1 hover:text-[#b713e9]' href={e.href}>
                                        {e.title}
                                    </a>
                                )
                            ))
                        }
                    </div>
                )}
            </div>
        </>
    )
}

export default buttonmobileheader
