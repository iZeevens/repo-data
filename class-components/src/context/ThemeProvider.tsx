import React, { ReactNode, FC, useState } from 'react'

type Theme = 'light' | 'dark'
type ChildrenProps = { children: ReactNode }

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
)

export const ThemeProvider: FC<ChildrenProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
