import React from 'react'
import { AppWindow, MailCheck } from 'lucide-react'
import discordproject from '/Discord-Web.png'
import hboproject from '/hbo-max-clone-website.png'
import gamewikiproject from '/GamesWikiApi.png'
import doublegreenproject from '/double stats.png'
import youtubegridproject from '/Youtube-Page-1.png'
import youtubecloneproject from '/Youtube-Page-2.png'
import Title from './title'

let cards = [
  // Discord Website
  {
    name: "Discord Website",
    description: "Responsive Layout for Discord Website With CSS",
    img: discordproject,
    repository: "https://github.com/Gabriel-S4/Construindo-um-Layout-Responsivo-Para-o-Site-do-Discord-Com-CSS",
    website: "https://gabriel-s4.github.io/Construindo-um-Layout-Responsivo-Para-o-Site-do-Discord-Com-CSS/"
  },
  // HBO Max website clone
  {
    name: "HBO Max website clone",
    description: "Cloning the HBO Max website in HTML and CSS",
    img: hboproject,
    repository: "https://github.com/Gabriel-S4/Clonando-o-Site-da-HBO-Max-em-HTML-e-CSS",
    website: "https://gabriel-s4.github.io/Clonando-o-Site-da-HBO-Max-em-HTML-e-CSS/"
  },
  // Game Wiki
  {
    name: "Game Wiki",
    description: "A game wiki with the RAWG API for the High Performance Web Coding course",
    img: gamewikiproject,
    repository: "https://github.com/Gabriel-S4/Codigos-de-Alta-Performance-GamesWiki",
    website: "https://gabriel-s4.github.io/Codigos-de-Alta-Performance-GamesWiki/"
  },
  // DoubleGreen - Stats
  {
    name: "DoubleGreen - Stats",
    description: "Front of a betting statistics website",
    img: doublegreenproject,
    repository: "",
    website: "https://projeto-stats.vercel.app"
  },
  // YouTube with Grid Layout
  {
    name: "YouTube with Grid Layout",
    description: "Reproducing YouTube Listing with Grid Layout in CSS",
    img: youtubegridproject,
    repository: "https://github.com/Gabriel-S4/Reproduzindo-a-Listagem-do-YouTube-com-Grid-Layout-no-CSS",
    website: "https://gabriel-s4.github.io/Reproduzindo-a-Listagem-do-YouTube-com-Grid-Layout-no-CSS/"
  },
  // Youtube Clone
  {
    name: "Youtube Clone",
    description: "Cloning Youtube with HTML and CSS",
    img: youtubecloneproject,
    repository: "https://github.com/Gabriel-S4/Clonando-a-P-gina-do-Youtube-com-CSS",
    website: "https://gabriel-s4.github.io/Clonando-a-P-gina-do-Youtube-com-CSS"
  },
  // Name
  // {
  //   name: "",
  //   description: "",
  //   img: "",
  //   repository: "",
  //   website: ""
  // },
]

// bg-[rgba(67,0,121,0.486)] bg-[url('https://www.transparenttextures.com/patterns/lined-paper-2.png')]
function projects() {
  return (
    <>

      <div id="projects" className="w-full min-h-dvh  pt-[100px] pb-[70px] flex flex-col items-center justify-center gap-[5px]">

      <Title>Projects</Title>

        <div className="flex items-center justify-center flex-wrap gap-[30px] max-w-[1200px] m-[30px] bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/20 shadow-2xl">
          {
            cards.map((card, index) => (
              <div className="w-[100%] h-[420px] sm:w-[370px] sm:h-[290px] bg-[rgb(20,20,20)] rounded-[20px] shadow-[0px_0px_10px_black] group hover:rotate-x-20 hover:-rotate-y-5 hover:shadow-[6px_6px_8px_rgb(35,35,35),12px_12px_8px_rgb(25,25,25),15px_15px_1px_rgb(0,0,0)] perspective-distant perspective-origin-top-left border-b-[5px] hover:border-r-[3px] border-transparent hover:border-b-black/60 transition-all duration-300" data-aos="flip-up" key={index}>

                <div className="w-full h-[65%] rounded-t-[20px] transition-all duration-500 overflow-hidden relative flex justify-center">
                  <div className="group/icon absolute z-[2] bottom-[5px] w-[50%] sm:w-[40%] h-[50px] flex items-center justify-center gap-[35px] bg-[rgba(0,0,0,0.6)] rounded-[25px]">
                    {
                      card.repository && (
                        <a className="transition-all duration-500 group-hover/icon:scale-100 hover:drop-shadow-[0px_0px_10px_var(--purple)]" target="_blank" href={card.repository}>
                          <svg className="drop-shadow-[0_0_5px_rgba(0,0,0,0)] h-[30px] w-[30px] transition-all duration-500" viewBox="0 -3 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" stroke="currentColor" fill="#FFFFFF"><path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" /></svg>
                        </a>
                      )
                    }
                    {
                      card.website && (
                        <a className="transition-all duration-500 group-hover/icon:scale-100 hover:drop-shadow-[0px_0px_10px_var(--purple)]" target="_blank" href={card.website}>
                          <AppWindow color="#FFFFFF" className="drop-shadow-[0_0_5px_rgba(0,0,0,0)] h-[30px] w-[30px] transition-all duration-500 border-white"/>
                        </a>
                      )
                    }
                  </div>
                  <img className="w-full h-full object-cover rounded-t-[20px] transition-all duration-500 z-[1] absolute image-pixelated group-hover:scale-110" src={card.img} alt="" />
                </div>

                <div className="w-full h-[35%] bg-[#202020] bg-[url('https://www.transparenttextures.com/patterns/lined-paper-2.png')] rounded-b-[20px] p-[20px]">
                  <h4 className="font-bold leading-[1.2] text-white/80 transition-all duration-500 text-[20px] cursor-default group-hover:text-white">{card.name}</h4>
                  <p className="font-light text-white text-[1rem] cursor-default">{card.description}</p>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default projects
