import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Contact from './Contact'
import Header from './Header'

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <About />
            <Contact />
        </div>
    )
}

export default Home