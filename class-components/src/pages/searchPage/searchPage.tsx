import './searchPage.scss'
import { useState } from 'react'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import ErrorBoundaryBtn from '../../components/errorBounderyButton.tsx/errorBounderyButton'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import { Routes, Route } from 'react-router-dom'

function SearchPage() {
  const [data, setData] = useState<Comics[]>()
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className="wrapper">
        <ErrorBoundaryBtn />
        <Search setDate={setData} setIsLoading={setIsLoading} />
        <Routes>
          <Route
            path="/:page"
            element={data && <Cards isLoading={isLoading} elements={data} />}
          />
        </Routes>
      </div>
    </>
  )
}

export default SearchPage
