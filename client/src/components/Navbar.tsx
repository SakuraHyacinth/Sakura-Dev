import wand from '../assets/key.webp'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-div">
      <img src={wand} id="wand-img" />
      <span className="navbar-logo">SakuraHyacinth</span>
    </div>
    <div className="navbar-links">
      {['About', 'Interests', 'Projects'].map((link) => (
        <a key={link} href={`#${link.toLowerCase()}`}>
          {link}
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;