import './searchPage.scss'
import { useEffect } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import useHandleSearch from '../../hooks/fetchDataHook'
import useCustomLocation from '../../hooks/navigateHook'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import { useNavigate, Outlet } from 'react-router-dom'

function SearchPage() {
  const { isLoading, data, handleSearch, setData, setIsLoading } =
    useHandleSearch<Comics[]>([])
  const [searchData] = useLocalStorage('search', '')

  const navigate = useNavigate()
  const { page } = useCustomLocation('page')

  useEffect(() => {
    handleSearch(searchData)
  }, [searchData, handleSearch])

  let dataElemsPerPage = null
  if (data) {
    Math.ceil((dataElemsPerPage = data.length / 5))
  }
  useEffect(() => {
    if (page < 0 || (dataElemsPerPage && page >= dataElemsPerPage)) {
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
