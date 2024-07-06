import { Component, ReactNode } from 'react'
import './App.scss'

interface ComponentProps {}

interface ComponentState {}

class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
  }

  componentDidMount(): void {
    const formData = new URLSearchParams();
    formData.append('name', 'Alex');

    fetch('https://stapi.co/api/v1/rest/character/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json'
      },  
      body: formData.toString()
    }).then(res => res.json()).then(res => console.log(res))
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
