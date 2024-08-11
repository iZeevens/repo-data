import ErrorBoundary from '../components/errorBoundery/errorBoundery'
import { render } from '@testing-library/react'

const Child = () => {
  throw new Error()
}

describe('Error Boundery', () => {
  it('Error Boundery should render Something went wrong', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    )

    const errorMessage = getByText('Something went wrong.')
    expect(errorMessage).toBeDefined()
  })
})
