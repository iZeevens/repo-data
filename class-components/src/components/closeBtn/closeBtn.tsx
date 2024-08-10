'use client'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function CloseBtn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchDefault = searchParams.get('search') || ''
  const page = searchParams.get('page') || ''

  const handleClose = () => {
    router.replace(`/?page=${page}&search=${searchDefault}`)
  }

  return (
    <button className="details-panel-close btn" onClick={() => handleClose()}>
      close
    </button>
  )
}
