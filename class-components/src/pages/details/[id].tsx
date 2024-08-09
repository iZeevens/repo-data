import { GetServerSideProps } from 'next'
import { CardDetailsData } from '../../interfaces/cardsTypes/cardsTypes'
import CloseBtn from '../../components/closeBtn/closeBtn'

interface DetailsPageProps {
  comicsData?: CardDetailsData | null
}

export default function DetailsPage({ comicsData }: DetailsPageProps) {
  if (!comicsData) {
    return <div>Data not found</div>
  }

  return (
    <div className="details-panel">
      <h3 className="details-title">{comicsData.title}</h3>
      <div className="details-info">
        <div className="details-info-about">
          <span>Number Pages: {comicsData.numberOfPages}</span>
          {comicsData.stardateFrom && (
            <span>Stardate From: {comicsData.stardateFrom}</span>
          )}
          {comicsData.stardateTo && (
            <span>Stardate To: {comicsData.stardateTo}</span>
          )}
          {comicsData.yearFrom && <span>Year From: {comicsData.yearFrom}</span>}
          {comicsData.yearTo && <span>Year To: {comicsData.yearTo}</span>}
          <span>Photonovel: {comicsData.photonovel ? 'Yes' : 'No'}</span>
          <span>Adaptation: {comicsData.adaptation ? 'Yes' : 'No'}</span>
        </div>
        {comicsData.characters && comicsData.characters.length > 0 ? (
          <div className="details-info--characters">
            <span>Characters:</span>
            {comicsData.characters.map((character, index) => (
              <div className="details-info--character" key={index}>
                <span>Name: {character.name}</span>
                <span>
                  Gender: {character.gender === 'M' ? 'Male' : 'Female'}
                </span>
                {character.yearOfBirth && (
                  <span>Year of birth: {character.yearOfBirth}</span>
                )}
                {character.yearOfDeath && (
                  <span>Year of death: {character.yearOfDeath}</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
      <CloseBtn />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  if (typeof id !== 'string') {
    return { props: { comicsData: null } }
  }

  const res = await fetch(`https://stapi.co/api/v1/rest/comics?uid=${id}`)
  const comicsData = await res.json()

  return {
    props: {
      comicsData: comicsData.comics || null,
    },
  }
}
