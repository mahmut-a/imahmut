'use client'

import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Tarayıcıdan tema tercihini al
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    
    // Tema sınıfını HTML elementine uygula
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={theme === 'light' ? 'Karanlık moda geç' : 'Aydınlık moda geç'}
    >
      {theme === 'light' ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
    </button>
  )
}

export default ThemeToggle 