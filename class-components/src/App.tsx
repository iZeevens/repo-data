import { Component, ReactNode } from 'react'
import './App.scss'

interface ComponentProps {}

interface ComponentState {
  count: number;
}

class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {count: 0}
  }

  onClickCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  
  render(): ReactNode {
    return (
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank"></a>
              <a href="https://react.dev" target="_blank"></a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={this.onClickCount}>
                count is {this.state.count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        )
  }
}

export default App
