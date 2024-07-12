import './searchPage.scss'
import { useEffect, useState } from 'react'
import Search from '../../components/search/search'
import Cards from '../../components/cards/cards'
import { fetchData } from '../../services/apiService'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
// import { Routes, Route } from 'react-router-dom'

function SearchPage() {
  const [data, setData] = useState<Comics[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleSearch = async (value: string) => {
      setIsLoading(true)

      const data = await fetchData(value)
      setData(data)

      setIsLoading(false)
    }
    handleSearch('')
  }, [])

  return (
    <>
      <div className="wrapper">
        <Search setData={setData} setIsLoading={setIsLoading} />
        {data && <Cards isLoading={isLoading} elements={data} />}
      </div>
    </>
  )
}

export default SearchPage
