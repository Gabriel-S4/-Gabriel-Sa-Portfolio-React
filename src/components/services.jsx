import React from 'react'
import img1 from '/editing.jpg'
import img2 from '/maintenance.jpg'
import img3 from '/Webdeveloper.jpg'
import Title from '../components/title'
// import { Vortex } from './ui/vortex'

const cards = [
    {
        icon: <svg className='max-w-[60px] p-[5px] m-[10px] border-[3px] border-white rounded-[15px] shadow-[0px_0px_10px_black]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 8.93137C22 8.32555 22 8.02265 21.8802 7.88238C21.7763 7.76068 21.6203 7.69609 21.4608 7.70865C21.2769 7.72312 21.0627 7.93731 20.6343 8.36569L17 12L20.6343 15.6343C21.0627 16.0627 21.2769 16.2769 21.4608 16.2914C21.6203 16.3039 21.7763 16.2393 21.8802 16.1176C22 15.9774 22 15.6744 22 15.0686V8.93137Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 9.8C2 8.11984 2 7.27976 2.32698 6.63803C2.6146 6.07354 3.07354 5.6146 3.63803 5.32698C4.27976 5 5.11984 5 6.8 5H12.2C13.8802 5 14.7202 5 15.362 5.32698C15.9265 5.6146 16.3854 6.07354 16.673 6.63803C17 7.27976 17 8.11984 17 9.8V14.2C17 15.8802 17 16.7202 16.673 17.362C16.3854 17.9265 15.9265 18.3854 15.362 18.673C14.7202 19 13.8802 19 12.2 19H6.8C5.11984 19 4.27976 19 3.63803 18.673C3.07354 18.3854 2.6146 17.9265 2.32698 17.362C2 16.7202 2 15.8802 2 14.2V9.8Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
        img: img1,
        title: 'Video Editor'
    },
    {
        icon: <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000" className="max-w-[60px] p-[5px] m-[10px] border-[3px] border-white rounded-[15px] shadow-[0px_0px_10px_black]"> <g id="SVGRepo_iconCarrier"> <style>{`.st0 { fill: #ffffff; }`}</style> <g> <path className="st0" d="M360.102,240.012l10.156-10.266c0,0,15.609-13.406,33.406-7.328c30.984,10.578,66.781-0.875,91.609-25.734 c7.063-7.063,15.641-21.234,15.641-21.234c0.984-1.344,1.328-3.047,0.922-4.672l-1.922-7.906c-0.359-1.484-1.313-2.75-2.625-3.531 c-1.313-0.766-2.891-0.969-4.344-0.547l-60.984,16.969c-2.266,0.625-4.688-0.219-6.063-2.109l-28.015-38.594 c-0.859-1.172-1.219-2.641-1.016-4.063l5.641-41c0.297-2.234,1.891-4.047,4.063-4.656l64.406-17.922 c2.906-0.813,4.672-3.813,3.953-6.766l-2.547-10.359c-0.344-1.469-1.281-2.719-2.563-3.5c0,0-5.047-3.344-8.719-5.234 c-36.578-18.891-82.64-13.031-113.312,17.656c-22.656,22.656-31.531,53.688-27.375,83.156c3.203,22.656,1.703,34.703-8.078,45.047 c-0.891,0.922-3.703,3.734-8.047,8L360.102,240.012z" /> <path className="st0" d="M211.383,295.418C143.024,361.652,68.461,433.715,68.461,433.715c-2.547,2.438-4,5.797-4.047,9.313 c-0.047,3.5,1.344,6.891,3.813,9.375l31.938,31.938c2.5,2.484,5.875,3.859,9.391,3.813c3.516-0.031,6.859-1.5,9.281-4.031 l139.328-140.953L211.383,295.418z" /> <path className="st0" d="M501.43,451.371c2.484-2.484,3.859-5.859,3.813-9.375c-0.031-3.516-1.5-6.859-4.031-9.297L227.415,166.246 l-43.953,43.969L450.805,483.09c2.438,2.547,5.781,4,9.297,4.047s6.891-1.344,9.391-3.828L501.43,451.371z" /> <path className="st0" d="M254.196,32.621c-32.969-12.859-86.281-14.719-117.156,16.141c-24.313,24.313-59.875,59.891-59.875,59.891 c-12.672,12.656-0.906,25.219-10.266,34.563c-9.359,9.359-24.313,0-32.734,8.422L3.29,182.527c-4.391,4.375-4.391,11.5,0,15.891 l43.016,43.016c4.391,4.391,11.516,4.391,15.906,0l30.875-30.875c8.438-8.422-0.938-23.375,8.438-32.719 c12.609-12.625,26.375-10.484,34.328-2.547l15.891,15.891l17.219,4.531l43.953-43.953l-5.063-16.688 c-14.016-14.031-16.016-30.266-7.234-39.047c13.594-13.594,36.047-33.234,57.078-41.656 C271.102,49.012,267.055,35.668,254.196,32.621z M194.571,103.48c-0.063,0.047,5.859-7.281,5.969-7.375L194.571,103.48z" /> </g> </g> </svg>,
        img: img2,
        title: 'Computer maintenance and Assembly'
    },
    {
        icon: <svg className='max-w-[60px] p-[5px] m-[10px] border-[3px] border-white rounded-[15px] shadow-[0px_0px_10px_black]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 8.93137C22 8.32555 22 8.02265 21.8802 7.88238C21.7763 7.76068 21.6203 7.69609 21.4608 7.70865C21.2769 7.72312 21.0627 7.93731 20.6343 8.36569L17 12L20.6343 15.6343C21.0627 16.0627 21.2769 16.2769 21.4608 16.2914C21.6203 16.3039 21.7763 16.2393 21.8802 16.1176C22 15.9774 22 15.6744 22 15.0686V8.93137Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 9.8C2 8.11984 2 7.27976 2.32698 6.63803C2.6146 6.07354 3.07354 5.6146 3.63803 5.32698C4.27976 5 5.11984 5 6.8 5H12.2C13.8802 5 14.7202 5 15.362 5.32698C15.9265 5.6146 16.3854 6.07354 16.673 6.63803C17 7.27976 17 8.11984 17 9.8V14.2C17 15.8802 17 16.7202 16.673 17.362C16.3854 17.9265 15.9265 18.3854 15.362 18.673C14.7202 19 13.8802 19 12.2 19H6.8C5.11984 19 4.27976 19 3.63803 18.673C3.07354 18.3854 2.6146 17.9265 2.32698 17.362C2 16.7202 2 15.8802 2 14.2V9.8Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
        img: img3,
        title: 'Web Development'
    }
]

function services() {
    return (
        // Pattern Services
        // bg-[#3e007183] bg-[url(https://www.transparenttextures.com/patterns/lined-paper-2.png)]
        // Border top
        // border-t-[10px] border-[var(--purple-dark-dark)]
        <>
            <section id="services" className='relative w-full min-h-[700px] p-[30px]  flex flex-col justify-center items-center gap-10 before:absolute before:z-4 before:top-0 before:left-0 before:w-full before:h-60 before:bg-gradient-to-t before:from-transparent before:to-(--purple-dark-dark)'>
                {/* container Services */}
                <Title >Services</Title>
                <div className="w-full flex flex-wrap justify-center items-center gap-[30px]">
                    {
                        cards.map((card, index) => (
                            <div key={index} className='z-5 w-[30%] min-w-[300px] max-w-[450px] h-[350px] flex flex-col items-center justify-start bg-[var(--purple-medium)] rounded-[25px] shadow-[0px_15px_20px_rgba(0,0,0,0.349)] transition-all duration-500 hover:-translate-y-[5px]'>
                                <div className='max-h-[103px] w-full flex items-center gap-[10px] p-[10px] border-b-[3px] border-b-[rgba(160,160,160,0.596)] bg-[var(--purple-light)] rounded-t-[25px]'>
                                    {card.icon}
                                    <span className='text-left text-white font-[Montserrat] font-normal text-[1.3em]'>
                                        {card.title}
                                    </span>
                                </div>
                                <div id="img-1" className="rounded-b-[25px] relative w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${card.img})` }}>

                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* <Alert/> */}
            {/* <Vortex rangeY="400" particleCount="50"/> */}
            </section>
            <div className='w-full h-[100px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-transparent via-transparent to-purple-900'>
            </div>
        </>
    )
}

export default services

// < div key = { index } className = 'w-[30%] min-w-[300px] max-w-[450px] h-[350px] flex flex-col items-center justify-start bg-[var(--purple-medium)] rounded-[25px] shadow-[0px_15px_20px_rgba(0,0,0,0.349)] transition-all duration-500 hover:-translate-y-[5px]' >
//                         <div className='max-h-[103px] w-full flex items-center gap-[10px] p-[10px] border-b-[3px] border-b-[rgba(160,160,160,0.596)] bg-[var(--purple-light)] rounded-t-[25px]'>
//                             {card.icon}
//                             <span className='text-left text-white font-[Montserrat] font-normal text-[1.3em]'>
//                                 {card.title}
//                             </span>
//                         </div>
//                         <div id="img-1" className="rounded-b-[25px] relative w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${card.img})` }}></div>
//                     </div >