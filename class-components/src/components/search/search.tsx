import './search.scss'
import { useState, FormEvent } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import useHandleSearch from '../../hooks/fetchDataHook'
import { SearchProps } from '../../interfaces/searchTypes/searchTypes'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

function Search({ setData, setIsLoading }: SearchProps) {
  const [searchData, setSearchData] = useLocalStorage('search')
  const [error, setError] = useState<string | null>('')
  const { handleSearch } = useHandleSearch<Comics[]>([])

  const validateSearch = (value: string) => {
    return !/^([a-zA-Zа-яА-ЯёЁ0-9]+\s)*[a-zA-Zа-яА-ЯёЁ0-9]+$/gm.test(value)
  }

  const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchValue = formData.get('search') as string

    setSearchData(searchValue)

    if (validateSearch(searchValue) && searchValue.length > 0) {
      setError('No extra spaces')
      return
    }

    setIsLoading(true)
    const data = await handleSearch(searchValue)
    setData(data)
    setIsLoading(false)
  }

  return (
    <>
      <form
        data-testid="search-form"
        className="search-continer"
        onSubmit={searchHandler}
      >
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
