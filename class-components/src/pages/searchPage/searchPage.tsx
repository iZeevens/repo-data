import './searchPage.scss'
import { useEffect } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import { useSearchComicsMutation } from '../../services/apiSlice'
import useCustomLocation from '../../hooks/navigateHook'
// import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import { useNavigate, Outlet } from 'react-router-dom'

function SearchPage() {
  const [searchData] = useLocalStorage('search')
  const [searchComics, { data, isLoading }] = useSearchComicsMutation()
  const navigate = useNavigate()
  const { page } = useCustomLocation('page')

  useEffect(() => {
    if (searchData !== null) {
      searchComics(searchData)
    }
  }, [searchData, searchComics])

  useEffect(() => {
    if (data) {
      const dataElemsPerPage = Math.ceil(data.comics.length / 5)
      if (page < 0 || page >= dataElemsPerPage) {
        navigate('/?page=1', { replace: true })
      }
    }
  }, [page, navigate, data])

  return (
    <>
      {/* <Search /> */}
      <div className="cards">
        {data && (
          <Cards isLoading={isLoading} elements={data.comics} currentPage={page} />
        )}
        <Outlet />
      </div>
      {data && <Pagination elements={data.comics} currentPage={page} />}
    </>
  )
}

export default SearchPage
