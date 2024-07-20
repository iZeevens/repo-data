import './searchPage.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Outlet } from 'react-router-dom'
// import { useSearchComicsMutation } from '../../services/apiSlice'
// import useLocalStorage from '../../hooks/localStorageHook'
import useCustomLocation from '../../hooks/navigateHook'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import { RootState } from '../../redux/store'
// import {
//   setData,
//   setIsLoading,
//   setSearchData,
// } from '../../redux/reducers/searchSlice'

function SearchPage() {
  const { data } = useSelector((state: RootState) => state.search)
  // const dispatch = useDispatch()
  // const [searchComics] = useSearchComicsMutation()
  const navigate = useNavigate()
  const { page } = useCustomLocation('page')

  // useEffect(() => {
  //   if (searchData !== null) {
  //     dispatch(setIsLoading(true))
  //     searchComics(searchData).then((response) => {
  //       dispatch(setData(response.data))
  //       dispatch(setIsLoading(false))
  //     })
  //   }
  // }, [searchData, searchComics, dispatch])

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
      <Search />
      <div className="cards">
        <Cards currentPage={page} />
        <Outlet />
      </div>
      {data && <Pagination elements={data.comics} currentPage={page} />}
    </>
  )
}

export default SearchPage
