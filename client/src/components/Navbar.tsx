// import wand from '../assets/key.webp'
import { CiStar } from "react-icons/ci";

const Navbar = () => {
  const handleScroll = (id: string) => {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth'});
  };


  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <CiStar className='star' />
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
