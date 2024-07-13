import './searchPage.scss'
import { useEffect, useState } from 'react'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import { fetchData } from '../../services/apiService'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import useLocalStorage from '../../hooks/localStorageHook'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'

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

  let dataElemsPerPage = null
  if (data) {
    Math.ceil((dataElemsPerPage = data.length / 5))
  }
  useEffect(() => {
    if (page < 0 || (dataElemsPerPage && page > dataElemsPerPage)) {
      navigate('/?page=1', { replace: true })
    }
  }, [page, navigate, dataElemsPerPage])

  return (
    <>
      <div className="wrapper">
        <Search setData={setData} setIsLoading={setIsLoading} />
        {data && (
          <Cards isLoading={isLoading} elements={data} currentPage={page} />
        )}
        <Outlet />
      </div>
    </>
  )
}

export default SearchPage
