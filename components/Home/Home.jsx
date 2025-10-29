import React from 'react'
import Hero from "./Hero/Hero";
import Services from "./Services/Services"
import Project from './Projects/Project';
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills"
import Footer from "./Footer/Footer"
import About from "./About/About";


const Home = () => {
  return  <div className='overflow-hidden'>
    <Hero/>
    <About/>
  
    <Services/>
    <Project/>
    <Skills/>
    <Contact/>
    <Footer/>
    
   
  </div>
}

export default Home;
