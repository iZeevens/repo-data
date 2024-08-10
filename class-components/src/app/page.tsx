import '../styles/index.scss'
import Search from '../components/search/search'
import getServerData from '../services/getServerData'
import Cards from '../components/cards/cards'
import Pagination from '../components/pagination/pagination'
import SelectedItemsWindow from '../components/selectedItemsWindow/selectedItemsWindow'
import StoreProvider from './StoreProvider'

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { search: string; page: string }
}) => {
  const { search = '', page = '' } = searchParams

  const serverData = await getServerData(search.toString())


  return (
    <StoreProvider>
      <div className="wrapper">
        <Search />

        <div className="cards">
          <Cards data={serverData} currentPage={page} />
        </div>
        <SelectedItemsWindow />
        <Pagination data={serverData} currentPage={page} search={search} />
      </div>
    </StoreProvider>
  )
}

export default SearchPage
