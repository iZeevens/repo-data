import { MemoryRouter } from 'react-router-dom'
import { ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'

const memoryRouterFunc = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>


const renderWithMemoryRouter = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: memoryRouterFunc, ...options })

export default renderWithMemoryRouter
