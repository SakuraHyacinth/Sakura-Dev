import { useState, useEffect } from 'react'
import './App.css'

// imported components
import About from './components/About';
import Hero from './components/Hero';
import Interests from './components/Interests';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Games from './components/Games'



const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function App() {
  const [message, setMessage] = useState('');     // do smth about `message` later

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Interests />
      <Projects />
      <Games />
    </>
  )
}

export default App