import { Component, ReactNode } from 'react'
import './App.scss'

interface ComponentProps {}

interface ComponentState {}

class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
  }


  render(): ReactNode {
    return (
      <>
        <div className="top-section">
          <h1>Top Section</h1>
        </div>
        <div className="bottom-section">
          <h2>Bottom Section</h2>
          <p>This is a bigger section below.</p>
        </div>
      </>
    )
  }
}

export default App
