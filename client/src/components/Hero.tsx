import { useState, useEffect } from 'react';
import Sakura from '../assets/sakura.jpg'
import wing from '../assets/wings.png'

const photos = [Sakura];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % photos.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-container">
      <img src={wing} className='wings' />
      <div className='hero'>
        <img src={photos[current]} alt="Your Name" className="hero-avatar" />
        <h1>Hi, I'm SakuraHyacinth</h1>
        <p>A short tagline about yourself.</p>
      </div>
      <img src={wing} className='wings' id='right-wing' />
    </section>
  );
};

export default Hero;