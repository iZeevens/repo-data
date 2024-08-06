import '../../pages/details/detailsPage.scss'
import { useRouter } from 'next/navigation'
import useCustomLocation from '../../hooks/navigateHook'

export default function CloseBtn() {
  const router = useRouter()
  const { page } = useCustomLocation('id')

  const handleClose = () => {
    router.replace(`/?page=${page}`)
  }

  return (
    <button className="details-panel-close btn" onClick={() => handleClose()}>
      close
    </button>
  )
}
