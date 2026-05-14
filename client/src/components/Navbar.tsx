const Navbar = () => (
  <nav className="navbar">
    <span className="navbar-logo">SakuraHyacinth</span>
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