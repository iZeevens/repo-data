import { Component, ErrorInfo } from 'react'
import {
  BounderyProps,
  BounderyState,
} from '../../interfaces/errorBoundery/errorBounderyTypes'

class ErrorBoundary extends Component<BounderyProps, BounderyState> {
  constructor(props: BounderyProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): BounderyState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
