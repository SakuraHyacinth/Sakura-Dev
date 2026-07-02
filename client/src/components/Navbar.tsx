// import wand from '../assets/key.webp'
import { CiStar } from "react-icons/ci";

const Navbar = () => {
  const handleScroll = (id: string) => {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth'});
  };


  return (
    <nav className="navbar">
      <div className="navbar-links">
        <CiStar className='star' />
        <span onClick={() => handleScroll('about')} >About Me</span>
        <CiStar className='star' />
        <span onClick={() => handleScroll('education')} >Education</span>
        <CiStar className='star' />
        <span onClick={() => handleScroll('jobs')}>Job History</span>
        <CiStar className='star' />
        <span onClick={() => handleScroll('projects')}>Projects</span>
        <CiStar className='star' />
      </div>

    </nav>
  );
};

export default Navbar;
