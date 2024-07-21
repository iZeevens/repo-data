import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'

function SwitchBtn() {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <button className="btn toggle-theme" onClick={toggleTheme}>
      Switch Theme
    </button>
  )
}

export default SwitchBtn
