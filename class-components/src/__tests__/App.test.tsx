import { render, screen } from '@testing-library/react'
import App from '../pages/_app'

describe('App component', () => {
  it('renders SearchPage for the root route', () => {
    render(<App />)
    expect(screen.getByText(/Search/i)).toBeInTheDocument()
  })
})
