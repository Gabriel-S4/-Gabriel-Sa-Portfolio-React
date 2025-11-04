import React from 'react'
import Hero from '../../components/hero'
import PurpleTransition from '../../components/PurpleTransition'
import AboutMe from '../../components/about-me'
import Projects from '../../components/projects'
import Footer from '../../components/footer'
import Hr from '../../components/hr'

function home() {
  return (
    <>
        <Hero />
        <PurpleTransition />
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
