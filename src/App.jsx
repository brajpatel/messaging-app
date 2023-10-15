import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('prefers-color-scheme: dark').matches)) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  
  return (
    <div className='bg-gray-100 dark:bg-gray-900'>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <>
              <Route path='/' element={<div>REDIRECT ME</div>}/>
              <Route path='/login' element={ <Login handleTheme={handleTheme}/> }/>
              <Route path='/sign-up' element={ <div>Sign up</div> }/>
            </>
          ) : (
            <Route path='/' element={<div>signed in</div>}/>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
