import './detailsCard.scss'
import { useState, useEffect } from 'react'
import { CardDetails } from '../../interfaces/cardsTypes/cardsTypes'
import { fetchData } from '../../services/apiService'
import { useLocation, useNavigate } from 'react-router-dom'

function DetailsCard() {
  const [detail, setDetail] = useState<CardDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const uid = new URLSearchParams(location.search).get('id') || '1'

  useEffect(() => {
    const handleSearch = async (value: string) => {
      setIsLoading(true)

      try {
        const data = await fetchData('', value)
        setDetail(data)
      } catch (error) {
        console.error(error)
      }

      setIsLoading(false)
    }
    if (uid) {
      handleSearch(uid)
    }
  }, [uid])

  console.log(detail)

  const handleClose = () => {
    navigate(-1)
  }

  if (!uid) return null

  return (
    <div className="details-panel">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className='details-main'>
          
          <span>1234</span>
          <span>1234</span>
          <span>1234</span>
          <button onClick={() => handleClose()}>close</button>
        </div>
      )}
    </div>
  )
}

export default DetailsCard
