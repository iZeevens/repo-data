import './cards.scss'
import { useState } from 'react'
import { CardsProps } from '../../interfaces/cardsTypes/cardsTypes'
import Pagination from '../pagination/pagination'

function Cards({ isLoading, elements }: CardsProps) {
  const [page, setPage] = useState(0)
  
  // const elementsPerPage = Math.ceil(elements.length / 5)

  // const lastIndexElems = elementsPerPage * page
  // const firstIndexElems = lastIndexElems - elementsPerPage

  return (
    <>
      <div className="cards-continer">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          elements.map((item, index) => {
            return (
              <div className="card-comics" key={index}>
                <span className="comics-title">{item.title}</span>
                <div className="comics-continer">
                  {item.publishedYear ? <span>{item.publishedYear}</span> : ''}
                  {item.publishedMonth ? (
                    <span>{item.publishedMonth}</span>
                  ) : (
                    ''
                  )}
                  {item.publishedDay ? <span>{item.publishedDay}</span> : ''}
                </div>
              </div>
            )
          })
        )}
      </div>
      <Pagination elements={elements} page={page} setPage={setPage} />
    </>
  )
}

export default Cards
