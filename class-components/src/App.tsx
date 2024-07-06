import { Component, ReactNode } from 'react'
import './App.scss'

interface Comics {
  title: string
  publishedYearFrom?: number
  publishedYearTo?: number
  numberOfPagesFrom?: number
  numberOfPagesTo?: number
  stardateFrom?: number
  stardateTo?: number
  yearFrom?: number
  yearTo?: number
  photonovel?: boolean
  adaptation?: boolean
}

interface ComponentProps {}
interface ComponentState {
  search: string
  elements: Array<Comics>
}


class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      search: 'A',
      elements: [],
    }
  }

  componentDidMount = async () => {
    const formData = new URLSearchParams()
    formData.append('name', 'Alex')

    const response = await fetch('https://stapi.co/api/v1/rest/comics/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: formData.toString(),
    })
    const data = await response.json()
    this.setState(() => ({ elements: data }))
    console.log(data)
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
        <div className="bottom-section">{/* {this.state.elements} */}</div>
      </>
    )
  }
}

export default App
