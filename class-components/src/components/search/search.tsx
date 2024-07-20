import './search.scss'
import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchComicsMutation } from '../../services/apiSlice'
import useLocalStorage from '../../hooks/localStorageHook'
import { setData } from '../../redux/reducers/searchSlice'

function Search() {
  const [searchData, setSearchData] = useLocalStorage('search')
  const [error, setError] = useState<string | null>('')
  const [searchComics] = useSearchComicsMutation()
  const dispatch = useDispatch()

  const validateSearch = (value: string) => {
    return !/^([a-zA-Zа-яА-ЯёЁ0-9]+\s)*[a-zA-Zа-яА-ЯёЁ0-9]+$/gm.test(value)
  }

  const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchValue = formData.get('search') as string

    setSearchData(searchValue)

    if (validateSearch(searchValue) && searchValue.length > 0) {
      return setError('No extra spaces')
    }

    // setIsLoading(true)
    // console.log(searchData)

    try {
      const result = await searchComics(searchValue).unwrap()
      dispatch(setData(result))
    } catch (error) {
      console.error(error)
    }

    // setIsLoading(false)
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
