import './searchPage.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux'
import { useNavigate, Outlet } from 'react-router-dom'
import { setPage } from '../../redux/reducers/searchSlice'
import store from '../../redux/store'
import useCustomLocation from '../../hooks/navigateHook'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import SwitchBtn from '../../components/switchTheme/switchTheme'
import SelectedItemsWindow from '../../components/selectedItemsWindow/selectedItemsWindow'
import { RootState } from '../../redux/store'

function SearchPage() {
  const { data } = useSelector((state: RootState) => state.search)
  const { page } = useCustomLocation('page')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage(page))
  }, [page, dispatch])

  useEffect(() => {
    if (data) {
      const dataElemsPerPage = Math.ceil(data.comics.length / 5)
      if (page < 0 || page >= dataElemsPerPage) {
        navigate('/?page=1', { replace: true })
      }
    }
  }, [page, navigate, data])

  return (
    <Provider store={store}>
      <div className="wrapper">
        <Search />
        <SwitchBtn />
        <div className="cards">
          <Cards />
          <Outlet />
        </div>
        <SelectedItemsWindow />
        <Pagination />
      </div>
    </Provider>
  )
}

export default SearchPage
