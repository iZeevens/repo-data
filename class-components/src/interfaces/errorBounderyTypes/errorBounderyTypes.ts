import { ReactNode } from 'react'

interface BounderyProps {
  children: ReactNode
}
interface BounderyState {
  hasError: boolean
  error: Error | null
}

export type { BounderyProps, BounderyState }
