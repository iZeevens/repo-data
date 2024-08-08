'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

type PageType = 'page' | 'id'

function useCustomLocation(pageUrl: PageType) {
  const [page, setPage] = useState<number>(1)
  const [uid, setUid] = useState<string>()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = searchParams?.get('page') || '1'
    const uid = searchParams?.get('id') || '1'

    const queryParam = pageUrl === 'page' ? 'page' : 'id'
    const passQuery = parseInt(url, 10)

    queryParam === 'page' ? setPage(passQuery - 1) : setPage(passQuery)
    setUid(uid)
  }, [searchParams, pageUrl])

  return { page, uid }
}

export default useCustomLocation
