import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import SearchPage from './components/SearchPage';
import PageNotFound from './components/PageNotFound';

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
    <div className={user ? 'h-screen flex flex-col lg:block dark:bg-gray-900' : 'h-screen bg-gray-100 dark:bg-gray-900'}>
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
              <Route path='/' element={ <Home/> }/>
              <Route path='/username' element={ <Profile/> }/>
              <Route path='/username/edit' element={ <ProfileEdit/> }/>              
              <Route path='/search' element={ <SearchPage/> }/>
              <Route path='/chat/:chatId' element={ <div>Chat page</div> }/>
              <Route path='*' element={ <PageNotFound/> }/>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;