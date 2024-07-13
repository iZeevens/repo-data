import './searchPage.scss'
import { useEffect } from 'react'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import useLocalStorage from '../../hooks/localStorageHook'
import useFetchDataHook from '../../hooks/fetchDataHook'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'

function SearchPage() {
  const [searchData] = useLocalStorage('search', '')
  const { setQuery, data, setData, isLoading, setIsLoading } = useFetchDataHook()
  const location = useLocation()
  const navigate = useNavigate()
  const pageQuery = new URLSearchParams(location.search).get('page') || '1'
  const page = parseInt(pageQuery, 10) - 1

  useEffect(() => {
    setQuery(searchData)
  }, [setQuery, searchData])

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
      <Search setData={setData} setIsLoading={setIsLoading} />
      <div className="cards">
        {data && (
          <Cards isLoading={isLoading} elements={data} currentPage={page} />
        )}
        <Outlet />
      </div>
      {data && <Pagination elements={data} currentPage={page} />}
    </>
  )
}

export default SearchPage
