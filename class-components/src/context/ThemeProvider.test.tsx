import { ThemeProvider, ThemeContext } from './ThemeProvider'
import { useContext } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const TestComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <div data-testid="theme">{theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

describe('Theme Provider', () => {
  it('Provider work correctly', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const btnChangeTheme = screen.getByText('Toggle Theme')
    const theme = screen.getByTestId('theme')

    const user = userEvent.setup()

    expect(theme).toHaveTextContent('light')

    await user.click(btnChangeTheme)

    expect(theme).toHaveTextContent('dark')

    await user.click(btnChangeTheme)

    expect(theme).toHaveTextContent('light')
  })
})
