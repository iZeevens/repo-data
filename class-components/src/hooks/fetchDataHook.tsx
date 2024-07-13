import { useState, useCallback } from 'react'
import { fetchData } from '../services/apiService'

export function useHandleSearch<T>(initialData: T) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(initialData)

  const handleSearch = useCallback(
    async (value: string, detailId: string = '') => {
      setIsLoading(true)
      try {
        const result = await fetchData(value, detailId)
        setData(result)
        return result
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  return { isLoading, data, handleSearch, setData, setIsLoading }
}

export default useHandleSearch
