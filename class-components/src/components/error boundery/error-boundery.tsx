import { Component, ErrorInfo, ReactNode } from 'react'

interface ComponentProps {
  children: ReactNode
}
interface ComponentState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ComponentState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children
  }
}

export default ErrorBoundary
