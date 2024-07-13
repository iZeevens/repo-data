import { useState, useEffect } from 'react'
import { fetchData } from '../services/apiService'
import { Comics } from '../interfaces/searchTypes/searchTypes'

function useFetchDataHook() {
  const [query, setQuery] = useState<string | null>(null)
  const [data, setData] = useState<Comics[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isUid, setIsUid] = useState<boolean>(false)

  useEffect(() => {
    const handleSearch = async (value: string) => {
      setIsLoading(true)
      const args: [string, string?] = isUid ? ['', value] : [value]
      try {
        const result = await fetchData(...args)
        setData(result)
      } catch {
        console.error('Error fetch Data')
      } finally {
        setIsLoading(false)
      }
    }

    if (query) {
      handleSearch(query)
    }
  }, [query, isUid])

  return { data, setData, isLoading, setIsLoading, setQuery, setIsUid }
}

export default useFetchDataHook
