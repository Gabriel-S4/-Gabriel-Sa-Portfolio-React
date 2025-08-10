import { React, useEffect, useRef, useState } from 'react'
import Buttonmobileheader from './button-mobile-header';
import logo from '/my-notion-face-transparent.png'

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const larguraAtual = window.innerWidth;
      const scrollPosition = window.scrollY;

      if (headerRef.current) {
        if (scrollPosition > 5 && larguraAtual > 800) {
          headerRef.current.style.background = "rgba(16, 16, 16, 0.9)";
        } else {
          headerRef.current.style.background = "transparent";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    {
      title: 'Home',
      href: '#home'
    },
    {
      title: 'Services',
      href: '#services'
    },
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
    <div>
      <header ref={headerRef} className='md:border-b-1 border-[rgba(40,40,40,1)] flex bg-transparent w-full h-[90px] flex-row items-center justify-end md:justify-around fixed top-0 z-20 transition-all duration-500'>

        <div className='h-[77px] w-[77px] hover:animate-pulse hidden md:flex items-center justify-center rounded-full transition-all duration-500 hover:bg-[var(--purple-dark)] bg-amber-50/10'>
          <a href="/">
            <img className=' transition-all ease-in-out duration-[500ms]' src={logo} alt=""></img>
          </a>
        </div>

        <nav className='hidden md:flex gap-[50px] drop-shadow-[0_4px_5px_black]'>
          {
            menu.map((e, index) => (e.href && e.title && (
              <a key={index} className='nav-before font-[Montserrat] font-medium text-[15px] text-white no-underline transition-all duration-500 relative scale-110 hover:-translate-y-1 hover:text-[#b713e9]' href={e.href}>{e.title}</a>
            )
          ))
        }
        </nav>
        <Buttonmobileheader />
      </header>
    </div>
  )
}

export default Header