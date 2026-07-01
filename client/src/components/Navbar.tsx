// import wand from '../assets/key.webp'
import { CiStar } from "react-icons/ci";

const Navbar = () => {
  const handleScroll = (id: string) => {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth'});
  };


  return (
    <nav className="navbar">
      {/* <div className="navbar-div">
        <img src={wand} id="wand-img" />
        <span className="navbar-logo">Lynn Pham</span>
      </div> */}

      <ul className="navbar-links">
        <li onClick={() => handleScroll('about')} >About Me</li>
        <CiStar className='star' />
        <li onClick={() => handleScroll('education')} >Education</li>
        <CiStar className='star' />
        <li onClick={() => handleScroll('jobs')}>Job History</li>
        <CiStar className='star' />
        <li onClick={() => handleScroll('projects')}>Projects</li>
        <CiStar className='star' />
      </ul>

    </nav>
  );
};

export default Navbar;
