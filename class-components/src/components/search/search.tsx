import './search.scss'
import { useState, FormEvent } from 'react'
import { fetchData } from '../../services/apiService'
import { SearchProps } from '../../interfaces/searchTypes/searchTypes'
import useLocalStorage from '../../hooks/localStorageHook'

function Search({ setDate, setIsLoading }: SearchProps) {
  const [searchDate, setSearchDate] = useLocalStorage('search', '')
  const [error, setError] = useState<string | null>('')

  const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    const searchValue = target.search.value
    setSearchDate(searchValue)

    if (
      !/^([a-zA-Zа-яА-ЯёЁ0-9]+\s)*[a-zA-Zа-яА-ЯёЁ0-9]+$/gm.test(searchValue) &&
      searchValue.length > 0
    ) {
      setError('No extra spaces')
      return
    }

    setIsLoading(true)

    try {
      const data = await fetchData(searchValue)
      setDate(data)
      console.log(data)
    } catch {
      setError(error)
    }
    setIsLoading(false)
  }

  return (
    <>
      <form className="search-continer" onSubmit={searchHandler}>
        <input
          className="search"
          type="text"
          placeholder="Search"
          name="search"
          defaultValue={searchDate}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      {error ? <span className="error">{error}</span> : ''}
    </>
  )
}

export default Search
