import { useState, useEffect } from 'react';
import Sakura from '../assets/sakura.jpg'
import { CiStar } from "react-icons/ci";

// Array of images (ADD MORE IMAGES)
const photos = [Sakura];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((i) => (i + 1) % photos.length);
        setVisible(true);
      }, 400);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-container">
      <div className='hero'>
        <img
          src={photos[current]}       /* Array of images that loops in Hero bar */
          alt="Your Name"
          className="hero-avatar"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
        />
        <h1>Hi, I'm Lynn Pham</h1>
        <p><CiStar /> Software Engineer <CiStar /></p>
        <p><CiStar /> Full-Stack Development with emphasis on frontend <CiStar /></p>
        <p><CiStar /> Typescript, React, Node.js <CiStar /></p>
      </div>
    </section>
  );
};

export default Hero;