import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('prefers-color-scheme: dark').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path='/' element={<div>signed out</div>}/>
          ) : (
            <Route path='/' element={<div>signed in</div>}/>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
