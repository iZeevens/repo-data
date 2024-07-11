import './searchPage.scss'
import { useState } from 'react'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import ErrorBoundaryBtn from '../../components/errorBounderyButton.tsx/errorBounderyButton'
import Pagination from '../../components/pagination/pagination'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

function SearchPage() {
  const [data, setData] = useState<Comics[]>()
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className="wrapper">
        <ErrorBoundaryBtn />
        <Search setDate={setData} setIsLoading={setIsLoading} />
        {data && <Cards isLoading={isLoading} elements={data} />}
        <Pagination />
      </div>
    </>
  )
}

export default SearchPage
