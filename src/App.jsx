import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Profile from './components/Profile';
import EditAccount from './components/EditAccount';
import DeleteAccount from './components/DeleteAccount';
import SearchPage from './components/SearchPage';
import ChatPage from './components/ChatPage';
import PageNotFound from './components/PageNotFound';

function App() {
  const [theme, setTheme] = useState(null);
  const [user, setUser] = useState(false);

  const login = (e) => {
    e.preventDefault();

    if(e.target.email.value.trim() === '' || e.target.password.value === '') return;

    fetch('https://messaging-app-api.fly.dev/login', {
        method: 'POST',
        headers: { 'Content-Type:': 'application/json' },
        body: {
          "email": e.target.email.value,
          "password": e.target.password.value
        }
      })
  }

  const logout = () => {
    fetch('https://messaging-app-api.fly.dev/logout', { method: 'POST' })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
          console.error("Error logging out:", err);
        })
        .finally(() => {
          setUser(null);
        })
}

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
        {user && <Sidebar theme={theme} handleTheme={handleTheme} logout={logout}/>}

        <Routes>
          {!user ? (
            <>
              <Route path='/' element={ <Navigate to='/login' /> }/>
              <Route path='/login' element={ <Login login={login}/> }/>
              <Route path='/sign-up' element={ <SignUp /> }/>
              <Route path='*' element={<Navigate to="/login"/>}/>
            </>
          ) : (
            <>
              <Route path='/' element={ <Posts/> }/>
              <Route path='/:username' element={ <Profile/> }/>
              <Route path='/account/edit' element={ <EditAccount/> }/>
              <Route path='/account/delete' element={ <DeleteAccount/> }/>
              <Route path='/search' element={ <SearchPage/> }/>
              <Route path='/chat/:chatId' element={ <ChatPage/> }/>
              <Route path='*' element={ <PageNotFound/> }/>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;