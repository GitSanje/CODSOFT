import React, { useRef } from 'react';
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from './Home';

const AllPage = () => {
 

  return (
    <>
      <section id="home" ><Home/></section>
      <section id="portfolio" ><Portfolio/></section>
      <section id="resume" ><Resume/></section>
      <section id="about" ><About/></section>
      <section id="contact" ><Contact/></section>
      <Footer/>
    </>
  );
};

export default AllPage;
