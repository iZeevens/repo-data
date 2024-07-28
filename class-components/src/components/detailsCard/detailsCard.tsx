import './detailsCard.scss'
import useCustomLocation from '../../hooks/navigateHook'
import { useGetComicsByUidMutation } from '../../services/apiSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function DetailsCard() {
  const navigate = useNavigate()
  const { page, uid } = useCustomLocation('id')
  const [searchByUid, { isLoading, data }] = useGetComicsByUidMutation()

  useEffect(() => {
    if (uid) {
      searchByUid(uid)
    }
  }, [uid, searchByUid])
  const comicsData = data?.comics

  const handleClose = () => {
    navigate(`/?page=${page}`)
  }

  return (
    <div className="details-panel">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <h3 className="details-title">{comicsData?.title}</h3>
          <div className="details-info">
            <div className="details-info-about">
              <span>Number Pages: {comicsData?.numberOfPages}</span>
              {comicsData?.stardateFrom && (
                <span>Stardate From: {comicsData?.stardateFrom}</span>
              )}
              {comicsData?.stardateTo && (
                <span>Stardate To: {comicsData.stardateTo}</span>
              )}
              {comicsData?.yearFrom && (
                <span>Year From: {comicsData.yearFrom}</span>
              )}
              {comicsData?.yearTo && <span>Year To: {comicsData.yearTo}</span>}
              <span>Photonovel: {comicsData?.photonovel ? 'Yes' : 'No'}</span>
              <span>Adaptation: {comicsData?.adaptation ? 'Yes' : 'No'}</span>
            </div>
            {comicsData?.characters && comicsData.characters.length > 0 ? (
              <div className="details-info--characters">
                <span>Characters:</span>
                {comicsData?.characters.map((character, index) => (
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
