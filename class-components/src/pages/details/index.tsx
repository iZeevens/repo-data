// app/details/page.tsx

import './detailsPage.scss'
import { CardDetailsData } from '../../interfaces/cardsTypes/cardsTypes'
import CloseBtn from '../../components/closeBtn/closeBtn'

async function fetchComicsData(id: string): Promise<CardDetailsData | null> {
  const response = await fetch(`/api/comics/${id}`)
  console.log(id)
  if (response.ok) {
    return response.json()
  }
  return null
}

console.log('yes')

export default async function DetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const comicsData = await fetchComicsData(id)

  if (!comicsData) {
    return <div>Data not found</div>
  }

  return (
    <div className="details-panel">
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
      <CloseBtn />
    </div>
  )
}
