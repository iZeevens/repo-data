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
  const pageQuery = new URLSearchParams(location.search).get('page') || '1'
  const page = parseInt(pageQuery, 10)

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

  const handleClose = () => {
    navigate(`/?page=${page}`)
  }

  if (!uid) return null

  return (
    <div className="details-panel">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <h3 className="details-title">{detail?.title}</h3>
          <div className="details-info">
            <div className="details-info-about">
              <span>Number Pages: {detail?.numberOfPages}</span>
              {detail?.stardateFrom && (
                <span>Stardate From: {detail?.stardateFrom}</span>
              )}
              {detail?.stardateTo && (
                <span>Stardate To: {detail?.stardateTo}</span>
              )}
              {detail?.yearFrom && <span>Year From: {detail?.yearFrom}</span>}
              {detail?.yearTo && <span>Year To: {detail?.yearTo}</span>}
              <span>Photonovel: {detail?.photonovel ? 'Yes' : 'No'}</span>
              <span>Adaptation: {detail?.adaptation ? 'Yes' : 'No'}</span>
            </div>
            {detail?.characters && detail.characters.length > 0 ? (
              <div className="details-info--characters">
                <span>Characters:</span>
                {detail?.characters.map((character, index) => (
                  <div className="details-info--character" key={index}>
                    <span>Name: {character.name}</span>
                    <span>
                      Gender: {character.gender === 'M' ? 'Male' : 'Female'}
                    </span>
                    {character.yearOfBirth && (
                      <span>Year of birth: {character.yearOfBirth}</span>
                    )}
                    {character.yearOfDeath && (
                      <span>Year of death:{character.yearOfDeath}</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
          <button
            className="details-panel-close btn"
            onClick={() => handleClose()}
          >
            close
          </button>
        </>
      )}
    </div>
  )
}

export default DetailsCard
