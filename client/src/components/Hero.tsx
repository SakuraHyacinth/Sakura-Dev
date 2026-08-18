// import { useState, useEffect } from 'react';
import Portrait from '../assets/portrait.jpg'

import { CiStar } from "react-icons/ci";

// Self Portrait
const photos = Portrait;

const Hero = () => {

  return (
    <section className="hero-container">
      <div className='hero'>
        <img
          src={photos}       /* Array of images that loops in Hero bar */
          alt="Your Name"
          className="hero-avatar"
        />
        <h1>Hi, I'm Lynn Pham</h1>
        <p><CiStar /> Software Engineer <CiStar /></p>
        <p><CiStar /> Full-Stack Development with emphasis on Frontend <CiStar /></p>
      </div>
    </section>
  );
};

export default Hero;