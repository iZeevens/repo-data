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
          <input className='search' type="text" placeholder='Search' />
          <button className='btn'>Search</button>
        </div>
        <div className="bottom-section">
          <h2>Bottom Section</h2>
        </div>
      </>
    )
  }
}

export default App
