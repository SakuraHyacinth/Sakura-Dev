import sakura from '../assets/sakura.jpg'

const Hero = () => (
  <section className="hero">
    <img src={sakura} alt="Cardcaptor Sakura" className="hero-avatar" />
    <h1>Hi, I'm SakuraHyacinth</h1>
    <p>Legally, my name is Lynn.<br></br>A software engineer with an unhealthy obsession with cats.</p>
  </section>
);

export default Hero;