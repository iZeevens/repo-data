import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type PageType = 'page' | 'id'

function useCustomLocation(pageUrl: PageType) {
  const [page, setPage] = useState<number>(1)
  const [uid, setUid] = useState<string>()
  const location = useLocation()

  useEffect(() => {
    const url = new URLSearchParams(location.search).get('page') || '1'
    const uid = new URLSearchParams(location.search).get('id') || '1'

    const queryParam = pageUrl === 'page' ? 'page' : 'id'
    const passQuery = parseInt(url, 10)

    queryParam === 'page' ? setPage(passQuery - 1) : setPage(passQuery)
    setUid(uid)
  }, [location.search, pageUrl])

  return { page, uid }
}

export default useCustomLocation
