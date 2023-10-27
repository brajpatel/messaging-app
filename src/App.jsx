import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import SignedIn from './components/SignedIn';
import Profile from './components/Profile';
import SearchPage from './components/SearchPage';

function App() {
  const [theme, setTheme] = useState(null);
  const [user, setUser] = useState(false);

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
    <div className={user ? 'h-screen flex flex-col lg:block bg-gray-100 dark:bg-gray-700 overflow-hidden' : 'h-screen bg-gray-100 dark:bg-gray-900'}>
      <BrowserRouter>
        {user && <Sidebar theme={theme} handleTheme={handleTheme}/>}

        <Routes>
          {!user ? (
            <>
              <Route path='/login' element={ <Login handleTheme={handleTheme}/> }/>
              <Route path='/sign-up' element={ <SignUp handleTheme={handleTheme}/> }/>
              <Route path='*' element={<Navigate to="/login"/>}/>
            </>
          ) : (
            <>
              <Route path='/' element={ <SignedIn/> }/>
              <Route path='/username' element={ <Profile/> }/>
              <Route path='/search' element={ <SearchPage/> }/>
              <Route path='*' element={ <div className='h-auto lg:h-full w-auto overflow-hidden bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50'>404 Not Found</div> }/>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;