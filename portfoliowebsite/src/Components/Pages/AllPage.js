import React, { useRef } from 'react';
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from './Home';

const AllPage = () => {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <section id="home" ref={homeRef}><Home/></section>
      <section id="portfolio" ref={portfolioRef}><Portfolio/></section>
      <section id="resume" ref={resumeRef}><Resume/></section>
      <section id="about" ref={aboutRef}><About/></section>
      <section id="contact" ref={contactRef}><Contact/></section>
      <Footer/>
    </>
  );
};

export default AllPage;
