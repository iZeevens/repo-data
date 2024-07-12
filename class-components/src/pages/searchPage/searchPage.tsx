import './searchPage.scss'
import { useEffect, useState } from 'react'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import { fetchData } from '../../services/apiService'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import useLocalStorage from '../../hooks/localStorageHook'

function SearchPage() {
  const [data, setData] = useState<Comics[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [searchData] = useLocalStorage('search', '')

  useEffect(() => {
    const handleSearch = async (value: string) => {
      setIsLoading(true)

      const data = await fetchData(value)
      setData(data)

      setIsLoading(false)
    }
    handleSearch(searchData)
  }, [searchData])

  return (
    <>
      <div className="wrapper">
        <Search setData={setData} setIsLoading={setIsLoading} />
        {/* <Routes>
          <Route
            path="/?page=:page"
            element={data && <Cards isLoading={isLoading} elements={data} />}
          />
        </Routes> */}
        {data && <Cards isLoading={isLoading} elements={data} />}
      </div>
    </>
  )
}

export default SearchPage
