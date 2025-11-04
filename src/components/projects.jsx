import { React, useState, useEffect } from 'react'
import { AppWindow } from 'lucide-react'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiReactrouter, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import discordproject from '/Discord-Web.png'
import hboproject from '/hbo-max-clone-website.png'
import gamewikiproject from '/GamesWikiApi.png'
import doublegreenproject from '/double stats.png'
import youtubegridproject from '/Youtube-Page-1.png'
import youtubecloneproject from '/Youtube-Page-2.png'
import agoraebooks from '/AgoraEbooks.png'
import Title from './title'



// bg-[rgba(67,0,121,0.486)] bg-[url('https://www.transparenttextures.com/patterns/lined-paper-2.png')]
function projects() {

  let cards = [
    // Ágora Soluções
    {
      name: "Ágora E-books",
      smallDescription: "Official portfolio of Ágora Soluções ebooks for sale on Hotmart. Covers Education, Tech, Fitness Cooking, and more.",
      description: "Digital portfolio and showcase website for the sale of ebooks on Hotmart. Ágora ebooks displays the digital book collection from Ágora Soluções, focusing on areas such as Education and Civil Service Exams, Technology and Programming, Fitness Cooking, and various other high-value topics.",
      img: agoraebooks,
      technologies: [
        {
          "name": "React",
          "icon": <FaReact size="35px" color="#00FFFF" />
        },
        {
          "name": "TypeScript",
          "icon": < SiTypescript size="35px" color="#3178C6" />,
        },
        {
          "name": "React-Router-Dom",
          "icon": <SiReactrouter size="35px" color="#F44250" />,
        },
      ],
      repository: "",
      website: "https://www.agoraebooks.com.br/"
    },
    // DoubleGreen - Stats
    {
      name: "DoubleGreen - Stats",
      smallDescription: "Front of a betting statistics website",
      description: "Website for football league match statistics and predictions, utilizing Artificial Intelligence (AI) algorithms for advanced analysis and results projection.",
      img: doublegreenproject,
      technologies: [
        {
          "name": "React",
          "icon": <FaReact size="35px" color="#00FFFF" />
        },
        {
          "name": "JavaScript",
          "icon": <SiJavascript size="35px" color="#FFFF00" />,
        },
        {
          "name": "React-Router-Dom",
          "icon": <SiReactrouter size="35px" color="#F44250" />,
        },
      ],
      repository: "",
      website: "https://projeto-stats.vercel.app"
    },
    // Game Wiki
    {
      name: "Game Wiki",
      smallDescription: "A game wiki with the RAWG API for the High Performance Web Coding course",
      description: "A game wiki with the RAWG API for the High Performance Web Coding course",
      img: gamewikiproject,
      technologies: [
        {
          "name": "HTML",
          "icon": <SiHtml5 size="35px" color="#DD4B25" />,
        },
        {
          "name": "CSS",
          "icon": <SiCss3 size="35px" color="#2862E9" />,
        },
        {
          "name": "JavaScript",
          "icon": <SiJavascript size="35px" color="#FFFF00" />,
        },
      ],
      repository: "https://github.com/Gabriel-S4/Codigos-de-Alta-Performance-GamesWiki",
      website: "https://gabriel-s4.github.io/Codigos-de-Alta-Performance-GamesWiki/"
    },
    // Discord Website
    {
      name: "Discord Website",
      smallDescription: "Responsive Layout for Discord Website With CSS",
      description: "Responsive Layout for Discord Website With CSS",
      img: discordproject,
      technologies: [
        {
          "name": "HTML",
          "icon": <SiHtml5 size="35px" color="#DD4B25" />,
        },
        {
          "name": "CSS",
          "icon": <SiCss3 size="35px" color="#2862E9" />,
        },
        {
          "name": "JavaScript",
          "icon": <SiJavascript size="35px" color="#FFFF00" />,
        },
      ],
      repository: "https://github.com/Gabriel-S4/Construindo-um-Layout-Responsivo-Para-o-Site-do-Discord-Com-CSS",
      website: "https://gabriel-s4.github.io/Construindo-um-Layout-Responsivo-Para-o-Site-do-Discord-Com-CSS/"
    },
    // HBO Max website clone
    {
      name: "HBO Max website clone",
      smallDescription: "Cloning the HBO Max website in HTML and CSS",
      description: "Cloning the HBO Max website in HTML and CSS",
      img: hboproject,
      technologies: [
        {
          "name": "HTML",
          "icon": <SiHtml5 size="35px" color="#DD4B25" />,
        },
        {
          "name": "CSS",
          "icon": <SiCss3 size="35px" color="#2862E9" />,
        },
        {
          "name": "JavaScript",
          "icon": <SiJavascript size="35px" color="#FFFF00" />,
        },
      ],
      repository: "https://github.com/Gabriel-S4/Clonando-o-Site-da-HBO-Max-em-HTML-e-CSS",
      website: "https://gabriel-s4.github.io/Clonando-o-Site-da-HBO-Max-em-HTML-e-CSS/"
    },
    // YouTube with Grid Layout
    {
      name: "YouTube with Grid Layout",
      smallDescription: "Reproducing YouTube Listing with Grid Layout in CSS",
      description: "Reproducing YouTube Listing with Grid Layout in CSS",
      img: youtubegridproject,
      technologies: [
        {
          "name": "HTML",
          "icon": <SiHtml5 size="35px" color="#DD4B25" />,
        },
        {
          "name": "CSS",
          "icon": <SiCss3 size="35px" color="#2862E9" />,
        },
        {
          "name": "JavaScript",
          "icon": <SiJavascript size="35px" color="#FFFF00" />,
        },
      ],
      repository: "https://github.com/Gabriel-S4/Reproduzindo-a-Listagem-do-YouTube-com-Grid-Layout-no-CSS",
      website: "https://gabriel-s4.github.io/Reproduzindo-a-Listagem-do-YouTube-com-Grid-Layout-no-CSS/"
    },
    // Youtube Clone
    // {
    //   name: "Youtube Clone",
    //   smallDescription: "Cloning Youtube with HTML and CSS",
    //   img: youtubecloneproject,
    //   repository: "https://github.com/Gabriel-S4/Clonando-a-P-gina-do-Youtube-com-CSS",
    //   website: "https://gabriel-s4.github.io/Clonando-a-P-gina-do-Youtube-com-CSS"
    // },
    // Name
    // {
    //   name: "",
    //   smallDescription: "",
    //   description: "",
    //   img: "",
    //   repository: "",
    //   website: ""
    // },
  ]

  const [card, setCard] = useState(null);

  // 2. HOOK CORRIGIDO: Monitora o estado 'card' para controlar o scroll
  useEffect(() => {
    // Escolhe o elemento que controla o scroll (document.documentElement = <html>; document.body é outra opção comum)
    const scrollElement = document.documentElement; 

    if (card) {
      // Se 'card' tem valor (modal está aberto), bloqueia o scroll
      scrollElement.style.overflow = 'hidden';
    } else {
      // Se 'card' é null (modal está fechado), libera o scroll
      // Usar '' é melhor pois reverte ao padrão do CSS
      scrollElement.style.overflow = '';
    }

    // Função de limpeza (cleanup)
    return () => {
      // Garante que o scroll é reativado se o componente for desmontado
      // ou se o 'card' for fechado pelo setCard(null)
      scrollElement.style.overflow = '';
    };

  }, [card]); // <-- Dependência CRUCIAL: Roda sempre que o estado 'card' muda!

  return (
    <>

      <div id="projects" className="w-full min-h-dvh  pt-[100px] pb-[70px] flex flex-col items-center justify-center gap-[5px]">

        <Title>Projects</Title>

        <div className="flex items-center justify-center flex-wrap gap-[30px] max-w-[1200px] sm:m-[30px] rounded-2xl p-3 ">
          {
            cards.map((card, index) => (
              <div
                onClick={() => setCard(card)}
                // Card Principal: Estilo Base e Hover
                className="cursor-pointer w-full max-w-sm sm:w-[370px] min-h-[320px] 
                rounded-xl shadow-xl overflow-hidden 
               group 
               transition-all duration-300 ease-in-out 
               transform 
               hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-purple-500/50"
                key={index}
              >

                <div className="w-full h-48 relative overflow-hidden flex justify-center">

                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={card.img}
                    alt={card.name}
                  />

                  <div className="absolute inset-x-0 bottom-0 p-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="group/icon p-2 h-10 flex items-center gap-4 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">

                      {card.repository && (
                        <a
                          className="text-gray-200 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
                          target="_blank"
                          href={card.repository}
                          onClick={(e) => e.stopPropagation()}
                          rel="noopener noreferrer"
                        >
                          {/* Ícone GitHub */}
                          <svg className="h-6 w-6 fill-current" viewBox="0 -3 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" /></svg>
                        </a>
                      )}
                      {card.website && (
                        <a
                          className="text-gray-200 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
                          target="_blank"
                          href={card.website}
                          onClick={(e) => e.stopPropagation()}
                          rel="noopener noreferrer"
                        >
                          <AppWindow className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {/* COR BOA MAS NÃO COMBINA: bg-gray-900 */}
                <div className="w-full h-full p-5 flex flex-col justify-between bg-gray-900/60 rounded-b-xl text-white">

                  <div>
                    <h4 className="text-xl font-bold leading-snug text-white transition-all duration-300 group-hover:text-purple-300 mb-2">
                      {card.name}
                    </h4>
                    <p className="min-h-[60px] text-gray-400 text-sm mb-4 line-clamp-3">
                      {card.smallDescription}
                    </p>
                  </div>

                  {card.technologies && (
                    <div>
                      <div className="pt-4">
                        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
                          Stack
                        </h3>
                        <div className="flex items-center flex-wrap gap-2">

                          {card.technologies.map((tech, index) => (

                            <div
                              key={index}
                              className="relative flex flex-col items-center group/tech-item"
                            >
                              <div
                                className="absolute bottom-full mb-3 hidden flex-col items-center group-hover/tech-item:flex transition-opacity duration-300"
                              >
                                <span className="relative z-10 px-3 py-1 text-xs leading-none text-white whitespace-nowrap bg-gray-700/90 rounded-md shadow-lg">
                                  {tech.name}
                                </span>

                                <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-700/90"></div>
                              </div>

                              <div
                                className="p-2 bg-gray-700 rounded-full transition-all duration-200 hover:bg-purple-600 hover:scale-105"
                              >
                                {tech.icon}
                              </div>
                            </div>

                          ))}

                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))
          }

          {card && (
            <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              {/* Card Principal - Ajuste de Cor, Borda e Sombra */}
              <div className="w-full max-w-lg lg:max-w-3xl bg-gray-900/90 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-in-out border border-transparent hover:border-purple-500/50 group">

                {/* Seção da Imagem */}
                <div className="w-full h-64 md:h-80 relative overflow-hidden flex justify-center">
                  {/* Imagem (com hover scale) */}
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={card.img}
                    alt={card.name}
                  />

                  {/* Ícones de Ação - Estilizado com Blur */}
                  <div className="absolute inset-x-0 bottom-0 p-3 flex justify-center">
                    <div className="group/icon p-2 h-12 flex items-center gap-6 bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                      {card.repository && (
                        <a
                          className="transition-all duration-300 text-gray-200 hover:text-purple-400 hover:scale-110"
                          target="_blank"
                          href={card.repository}
                          rel="noopener noreferrer"
                        >
                          {/* Ajuste do SVG para consistência visual */}
                          <svg className="h-7 w-7" viewBox="0 -3 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" stroke="currentColor" fill="currentColor"><path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" /></svg>
                        </a>
                      )}
                      {card.website && (
                        <a
                          className="transition-all duration-300 text-gray-200 hover:text-purple-400 hover:scale-110"
                          target="_blank"
                          href={card.website}
                          rel="noopener noreferrer"
                        >
                          {/* Assumindo que AppWindow é um componente de ícone (ex: lucide-react) */}
                          <AppWindow className="h-7 w-7" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Seção do Conteúdo (Nome e Descrição) */}
                <div className="p-6 flex flex-col gap-4 text-white">

                  <div>
                    {/* Título - Maior e mais destacado */}
                    <h4 className="text-3xl font-extrabold text-white mb-2 leading-tight">
                      {card.name}
                    </h4>
                    {/* Descrição - Boa legibilidade */}
                    <p className="text-gray-400 text-base font-light">
                      {card.description}
                    </p>
                  </div>

                  {/* Botão de Fechar - Menos intrusivo (Pode ser um X ou um botão discreto) */}
                  <div className="w-full flex-col sm:flex-row gap-6 sm:gap-0 flex justify-between pt-4">
                    {card.technologies && (
                      <div>
                        <div className="pt-4">
                          <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2 tracking-wider">
                            Stack
                          </h3>
                          <div className="flex items-center flex-wrap gap-2">

                            {card.technologies.map((tech, index) => (

                              <div
                                key={index}
                                className="relative flex flex-col items-center group/tech-item"
                              >
                                <div
                                  className="absolute bottom-full mb-3 hidden flex-col items-center group-hover/tech-item:flex transition-opacity duration-300"
                                >
                                  <span className="relative z-10 px-3 py-1 text-xs leading-none text-white whitespace-nowrap bg-gray-700/90 rounded-md shadow-lg">
                                    {tech.name}
                                  </span>

                                  <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-700/90"></div>
                                </div>

                                <div
                                  className="p-2 bg-gray-700 rounded-full transition-all duration-200 hover:bg-purple-600 hover:scale-105"
                                >
                                  {tech.icon}
                                </div>
                              </div>

                            ))}

                          </div>
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => setCard()}
                      className="text-white hover:text-red-400 transition-colors duration-300 p-2 text-sm font-medium rounded-lg cursor-pointer sm:mr-6"
                      aria-label="Fechar"
                    >
                      FECHAR
                    </button>
                    {/* Opção para usar ícone de fechar (requer componente de ícone, ex: X) */}
                    {/* <button onClick={() => handleCard()} className="text-white hover:text-red-400 transition-colors duration-300 p-2 rounded-full" aria-label="Fechar">
                    <X className="h-6 w-6" /> 
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default projects
