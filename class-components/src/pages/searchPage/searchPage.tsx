import './searchPage.scss'
import { useEffect, useState } from 'react'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import { fetchData } from '../../services/apiService'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import useLocalStorage from '../../hooks/localStorageHook'
import { useLocation, useNavigate } from 'react-router-dom'

function SearchPage() {
  const [data, setData] = useState<Comics[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [searchData] = useLocalStorage('search', '')
  const location = useLocation()
  const navigate = useNavigate()
  const pageQuery = new URLSearchParams(location.search).get('page') || '1'
  const page = parseInt(pageQuery, 10) - 1

  useEffect(() => {
    const handleSearch = async (value: string) => {
      setIsLoading(true)

      const data = await fetchData(value)
      setData(data)

      setIsLoading(false)
    }
    handleSearch(searchData)
  }, [searchData])

  useEffect(() => {
    if (page < 0) {
      navigate('/?page=1', { replace: true })
    }
  }, [page, navigate])

  return (
    <>
      <div className="wrapper">
        <Search setData={setData} setIsLoading={setIsLoading} />
        {data && <Cards isLoading={isLoading} elements={data} currentPage={page} />}
      </div>
    </>
  )
}

export default SearchPage
