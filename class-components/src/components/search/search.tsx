import './search.scss'
import { useState, FormEvent } from 'react'
import { fetchData } from '../../services/apiService'
import { SearchProps } from '../../interfaces/searchTypes/searchTypes'
import useLocalStorage from '../../hooks/localStorageHook'

function Search({ setDate, setIsLoading }: SearchProps) {
  const [searchData, setSearchData] = useLocalStorage('search', '')
  const [error, setError] = useState<string | null>('')

  const handleSearch = async (value: string) => {
    setIsLoading(true)

    try {
      const data = await fetchData(value)
      setDate(data)
    } catch {
      setError(error)
    }

    setIsLoading(false)
  }

  const validateSearch = (value: string) => {
    return !/^([a-zA-Zа-яА-ЯёЁ0-9]+\s)*[a-zA-Zа-яА-ЯёЁ0-9]+$/gm.test(value)
  }

  const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    const searchValue = target.search.value
    setSearchData(searchValue)

    if (!validateSearch && searchValue.length > 0) {
      setError('No extra spaces')
      return
    }

    await handleSearch(searchValue)
  }

  return (
    <>
      <form className="search-continer" onSubmit={searchHandler}>
        <input
          className="search"
          type="text"
          placeholder="Search"
          name="search"
          defaultValue={searchData}
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
