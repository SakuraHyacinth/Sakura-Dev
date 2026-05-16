import wand from '../assets/key.webp'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-div">
      <img src={wand} id="wand-img" />
      <span className="navbar-logo">SakuraHyacinth</span>
    </div>
  </nav>
);

export default Navbar;