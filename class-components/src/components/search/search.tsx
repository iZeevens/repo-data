'use client'

import './search.scss'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

function Search() {
  const [error, setError] = useState<string | null>('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchDefault = searchParams.get('search') || ''


  const validateSearch = (value: string) => {
    return !/^([a-zA-Zа-яА-ЯёЁ0-9]+\s)*[a-zA-Zа-яА-ЯёЁ0-9]+$/gm.test(value)
  }

  const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchValue = formData.get('search') as string

    if (validateSearch(searchValue) && searchValue.length > 0) {
      return setError('No extra spaces')
    }

    router.push(
      `/?page=${'1'}&search=${encodeURIComponent(searchValue)}`
    )
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
          defaultValue={searchDefault}
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
