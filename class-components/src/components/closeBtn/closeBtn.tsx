import { useRouter, useSearchParams } from 'next/navigation'

export default function CloseBtn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const search = searchParams.get('search')

  const handleClose = () => {
    router.replace(`/?page=${page}&search=${search}`)
  }

  return (
    <button className="details-panel-close btn" onClick={() => handleClose()}>
      close
    </button>
  )
}
