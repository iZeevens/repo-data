import { FormEvent } from 'react'
import { StateSearchType } from '../../interfaces/searchTypes/searchTypes'

const searchHandler = (
  e: FormEvent<HTMLFormElement>,
  setState: StateSearchType,
  fetchData: () => void
) => {
  e.preventDefault()
  const target = e.target as typeof e.target & {
    search: { value: string }
  }
  const searchValue = target.search.value

  if (!/^([a-zA-Zа-яА-ЯёЁ0-9]+\s)*[a-zA-Zа-яА-ЯёЁ0-9]+$/gm.test(searchValue)) {
    setState({ error: 'No extra spaces' })
    return
  }

  localStorage.setItem('search', searchValue)
  setState({ search: searchValue })
  fetchData()
}

export { searchHandler }
