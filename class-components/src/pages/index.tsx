import Search from '../components/search/search'
import Cards from '../components/cards/cards'
import Pagination from '../components/pagination/pagination'
import SwitchBtn from '../components/switchTheme/switchTheme'
import SelectedItemsWindow from '../components/selectedItemsWindow/selectedItemsWindow'

function SearchPage() {
  return (
    <div className="wrapper">
      <Search />
      <SwitchBtn />

      <div className="cards">
        <Cards />
      </div>
      <SelectedItemsWindow />
      <Pagination />
    </div>
  )
}

export default SearchPage
