import Search from '../components/search/search'
import getServerData from '../services/getServerData'
import Cards from '../components/cards/cards'
import Pagination from '../components/pagination/pagination'
import SwitchBtn from '../components/switchTheme/switchTheme'
import SelectedItemsWindow from '../components/selectedItemsWindow/selectedItemsWindow'
import { Comics } from '../interfaces/searchTypes/searchTypes'
import { GetServerSideProps } from 'next'

interface SearchPageProps {
  data: Comics
  currentPage: string
  search: string
}

function SearchPage(props: SearchPageProps) {
  return (
    <div className="wrapper">
      <Search />
      <SwitchBtn />

      <div className="cards">
        <Cards data={props.data} currentPage={props.currentPage} />
      </div>
      <SelectedItemsWindow />
      <Pagination
        data={props.data}
        currentPage={props.currentPage}
        search={props.search}
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchQuery = context.query.search || ''
  const currentPage = context.query.page || ''

  const serverData = await getServerData(searchQuery.toString())

  return {
    props: {
      data: serverData,
      currentPage: currentPage,
      search: searchQuery,
    },
  }
}

export default SearchPage
