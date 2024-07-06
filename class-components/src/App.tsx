import { Component, ReactNode } from 'react'
import './App.scss'

interface ComponentProps {}

interface ComponentState {}

class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      search: 'Alex',
      elements: [],
    }
  }

  componentDidMount = async () => {
    const formData = new URLSearchParams()
    formData.append('name', 'Alex')

    const response = await fetch(
      'https://stapi.co/api/v1/rest/character/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          accept: 'application/json',
        },
        body: formData.toString(),
      }
    )
    const data = await response.json()
    this.setState(() => ({ elements: data }))
  }

  render(): ReactNode {
    return (
      <>
        <form className="top-section">
          <input className="search" type="text" placeholder="Search" />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <div className="bottom-section">
          <h2>Bottom Section</h2>
        </div>
      </>
    )
  }
}

export default App
