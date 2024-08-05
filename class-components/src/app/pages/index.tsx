'use client'

import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import SwitchBtn from '../../components/switchTheme/switchTheme'
import SelectedItemsWindow from '../../components/selectedItemsWindow/selectedItemsWindow'
import StoreProvider from '../StoreProvider'

function SearchPage() {
  return (
    <StoreProvider>
      <div className="wrapper">
        <Search />
        <SwitchBtn />
        <div className="cards">
          <Cards />
        </div>
        <SelectedItemsWindow />
        <Pagination />
      </div>
    </StoreProvider>
  )
}

export default SearchPage
