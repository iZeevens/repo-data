import { useState, FormEvent } from 'react'
import { fetchData } from '../../services/apiService'
// import { StateSearchType } from '../../interfaces/searchTypes/searchTypes'

function Search() {
  const [searchDate, setSearchDate] = useState('')
  const [error, setError] = useState('')

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    const searchValue = target.search.value

    if (
      !/^([a-zA-Zа-яА-ЯёЁ0-9]+\s)*[a-zA-Zа-яА-ЯёЁ0-9]+$/gm.test(searchValue)
    ) {
      setError('No extra spaces')
      return
    }

    localStorage.setItem('search', searchValue)
    setSearchDate(searchValue)
    fetchData(searchValue)
  }

  return (
    <>
      <form className="top-section" onSubmit={searchHandler}>
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

export { Search }
