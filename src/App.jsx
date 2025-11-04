import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import Header from "./components/header"
import AboutMe from './components/about-me'
// import Services from './components/services'
import Projects from './components/projects'
import Footer from './components/footer'
import Image from '/sadEmote.png'
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe/>} />
        {/* <Route path="/services" element={<Services/>}/> */}
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Footer/>} />
        <Route path="*" element={
          <div className="text-white text-center text-3xl md:text-8xl font-bold w-full h-dvh flex flex-col items-center justify-center">
            <p>404 Not Found</p>
            <img className="w-70 md:w-100 drop-shadow-lg" src={Image} alt="" />
        </div>} />
      </Routes>
    </>
  )
}

export default App
