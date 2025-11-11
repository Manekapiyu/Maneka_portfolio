import React from 'react'
import Hero from "./Hero/Hero";
import Project from './Projects/Project';
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills"
import Footer from "./Footer/Footer"
import About from "./About/About";
import Certificate from './Certificate/Certification';


const Home = () => {
  return <div className='overflow-hidden'>
    <Hero />
    <About />

    <Skills />
    <Project />
    <Certificate />
    <Contact />
    <Footer />


  </div>
}

export default Home;
