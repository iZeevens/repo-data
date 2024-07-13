import './detailsCard.scss'
import { useEffect } from 'react'
import useCustomLocation from '../../hooks/navigateHook'
import useHandleSearch from '../../hooks/fetchDataHook'
import { CardDetails } from '../../interfaces/cardsTypes/cardsTypes'
import { useNavigate } from 'react-router-dom'

function DetailsCard() {
  const navigate = useNavigate()
  const {
    isLoading,
    data: detail,
    handleSearch,
  } = useHandleSearch<CardDetails>({})
  const { page, uid } = useCustomLocation('id')

  useEffect(() => {
    if (uid) {
      handleSearch(null, uid.toString())
    }
  }, [uid, handleSearch])

  const handleClose = () => {
    navigate(`/?page=${page}`)
  }

  if (!page) return null

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
