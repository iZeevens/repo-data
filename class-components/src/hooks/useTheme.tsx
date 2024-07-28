import { ThemeContext } from '../context/ThemeProvider'
import { useContext } from 'react'

function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return [theme, toggleTheme]
}

export default useTheme
