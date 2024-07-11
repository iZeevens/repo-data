import './searchPage.scss'
import { useState } from 'react'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

function SearchPage() {
  const [data, setData] = useState<Comics[]>()
  const [isLoading, setIsLoading] = useState(true)

  const throwError = () => {
    throw Error
  }

  return (
    <>
      <div className="top-section-wrapper">
        <button className="btn btn-error" onClick={throwError}>
          Throw Error
        </button>
        <Search setDate={setData} setIsLoading={setIsLoading} />
        {data && <Cards isLoading={isLoading} elements={data} />}
      </div>
    </>
  )
}

export default SearchPage
