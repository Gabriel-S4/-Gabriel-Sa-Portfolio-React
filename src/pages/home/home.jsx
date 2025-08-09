import React from 'react'
import Hero from '../../components/hero'
import Services from '../../components/services'
import AboutMe from '../../components/about-me'
import Projects from '../../components/projects'
import Footer from '../../components/footer'
import Hr from '../../components/hr'

function home() {
  return (
    <>
        <Hero />
        <Services />
        <Hr />
        <AboutMe />
        <Hr />
        <Projects />
        <Hr />
        <Footer />
    </>
  )
}

export default home
