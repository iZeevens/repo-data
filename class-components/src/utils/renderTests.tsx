import { MemoryRouter } from 'react-router-dom'
import { ReactElement, ReactNode } from 'react'

const renderTestsComponent = <P,>(component: ReactElement<P>): ReactNode => (
  <MemoryRouter>{component}</MemoryRouter>
)

export default renderTestsComponent
