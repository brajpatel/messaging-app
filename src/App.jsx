import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';

function App() {
  const [theme, setTheme] = useState(null);
  const [user, setUser] = useState(true);

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
    <>
      <BrowserRouter>
        {user && <Sidebar/>}

        <Routes>
          {!user ? (
            <>
              <Route path='/login' element={ <Login handleTheme={handleTheme}/> }/>
              <Route path='/sign-up' element={ <SignUp handleTheme={handleTheme}/> }/>
              <Route path='*' element={<Navigate to="/login"/>}/>
            </>
          ) : (
            <>
              <Route path='/' element={<div>signed in</div>}/>
              <Route path='*' element={<div>404 Not Found</div>}/>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
