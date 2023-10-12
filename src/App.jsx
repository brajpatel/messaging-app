import './App.css'
import { useState, useEffect } from 'react'

function App() {
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
    <div className='h-screen bg-gray-200 dark:bg-gray-900 flex justify-center items-center'>
      <button className='bg-white rounded-2xl p-3 shadow' onClick={handleTheme}>Change Theme</button>
    </div>
  )
}

export default App
