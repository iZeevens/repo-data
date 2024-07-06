import { Component, ReactNode } from 'react'
import './App.scss'

interface Comics {
  title: string
  publishedYear?: number
  publishedMonth?: number
  publishedDay?: number
  numberOfPages?: number
  photonovel?: boolean
  adaptation?: boolean
}

interface ComponentProps {}
interface ComponentState {
  search: string
  elements: Array<Comics>
  isLoading: boolean
}

class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      search: 'A',
      elements: [],
      isLoading: true,
    }
  }

  componentDidMount = async () => {
    try {
      const formData = new URLSearchParams()
      formData.append('name', 'Alex')

      const response = await fetch(
        'https://stapi.co/api/v1/rest/comics/search',
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
      this.setState(() => ({ elements: data.comics }))
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      this.setState(() => ({ isLoading: false }))
    }
  }

  render(): ReactNode {
    const { isLoading, elements } = this.state
    return (
      <>
        <form className="top-section">
          <input className="search" type="text" placeholder="Search" />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <div className="bottom-section">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            elements.map((item, index) => {
              return (
                <div className="card-comics" key={index}>
                  <span className="comics-title">{item.title}</span>
                  <div className="comics-continer">
                    {item.publishedYear ? (
                      <span>{item.publishedYear}</span>
                    ) : (
                      ''
                    )}
                    {item.publishedMonth ? (
                      <span>{item.publishedMonth}</span>
                    ) : (
                      ''
                    )}
                    {item.publishedDay ? <span>{item.publishedDay}</span> : ''}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </>
    )
  }
}

export default App
