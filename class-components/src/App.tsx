import { Component, FormEvent, ReactNode } from 'react'
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
  error: null | string
}

class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      search: localStorage.getItem('search') ?? '',
      elements: [],
      isLoading: true,
      error: null,
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ isLoading: true, error: null })
    try {
      const formData = new URLSearchParams()
      formData.append('title', this.state.search)

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
      this.setState({ elements: data.comics })
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    const searchValue = target.search.value

    if (
      !/^([a-zA-Zа-яА-ЯёЁ0-9]+\s)*[a-zA-Zа-яА-ЯёЁ0-9]+$/gm.test(searchValue)
    ) {
      this.setState({ error: 'No extra spaces' })
      return
    }

    localStorage.setItem('search', searchValue)
    this.setState({ search: searchValue }, this.fetchData)
  }

  throwError = () => {
    this.setState(() => {
      throw new Error('Error detected');
    });
  }  

  render(): ReactNode {
    const { isLoading, elements, error } = this.state
    return (
      <>
        <div className="top-section-wrapper">
          <button className="btn btn-error" onClick={this.throwError}>
            Throw Error
          </button>
          <form className="top-section" onSubmit={this.searchHandler}>
            <input
              className="search"
              type="text"
              placeholder="Search"
              name="search"
              defaultValue={this.state.search}
            />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
        </div>
        {error ? <span className="error">{error}</span> : ''}
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
