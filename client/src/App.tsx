import { useState, useEffect } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App