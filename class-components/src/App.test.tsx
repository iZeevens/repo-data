import { render } from '@testing-library/react'
import SearchPage from './pages/searchPage/searchPage'

describe('App component', () => {
  it('App renders', () => {
    render(<SearchPage />)
  })
})
