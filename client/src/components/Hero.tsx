import { useState, useEffect } from 'react';
import Sakura from '../assets/sakura.jpg'
import Sakura1 from '../assets/sakura1.jpg'
import Sakura2 from '../assets/sakura2.jpg'
import Sakura3 from '../assets/sakura3.jpg'
import wing from '../assets/wings.png'

const photos = [Sakura, Sakura1, Sakura2, Sakura3];

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
      <img src={wing} className='wings' />
      <div className='hero'>
        <img
          src={photos[current]}
          alt="Your Name"
          className="hero-avatar"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
        />
        <h1>Hi, I'm SakuraHyacinth</h1>
        <p>Legally though, my name is Lynn.</p>
      </div>
      <img src={wing} className='wings' id='right-wing' />
    </section>
  );
};

export default Hero;