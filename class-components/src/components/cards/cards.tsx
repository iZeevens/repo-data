'use client'

import './cards.scss'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCardDetails,
  removeCardDetails,
} from '../../lib/reducers/searchSlice'
import { useGetComicsByUidMutation } from '../../services/apiSlice'
import { RootState } from '../../lib/store'
import { Comics } from '../../interfaces/searchTypes/searchTypes'
import { ChangeEvent } from 'react'

interface CardsProps {
  data: Comics
  currentPage: string
}

function Cards({ data, currentPage }: CardsProps) {
  const router = useRouter()
  const dispatch = useDispatch()
  const { cardsDetails } = useSelector((state: RootState) => state.search)
  const [searchByUid] = useGetComicsByUidMutation()

  if (!data.comics) return
  
  const lastIndexElems = 5 * Number(currentPage)
  const firstIndexElems = lastIndexElems - 5
  const elementsPagination = data.comics.slice(firstIndexElems, lastIndexElems)

  const handleCardClick = (id: string) => {
    router.push(`/details/${id}?page=${currentPage}`)
  }

  const handleCheckboxClick = async (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()
    const target = event.target as HTMLInputElement
    const targetUid = target.id

    if (target.checked) {
      const comicsData = await searchByUid(targetUid)
      dispatch(setCardDetails([comicsData.data?.comics]))
    } else {
      dispatch(
        removeCardDetails(
          cardsDetails?.filter((item) => item.uid !== targetUid)
        )
      )
    }
  }

  return (
    <div className="cards-continer">
      {elementsPagination && elementsPagination.length === 0 ? (
        <div>Elements Not Found</div>
      ) : (
        elementsPagination.map((item) => {
          const isChecked =
            cardsDetails?.some((card) => card.uid === item.uid) || false

          return (
            <div className={`card-comics card-comics`} key={item.uid}>
              <div onClick={() => handleCardClick(item.uid!)}>
                <span className="comics-title">{item.title}</span>
                <div className="comics-continer">
                  {item.publishedYear && (
                    <span>Published year: {item.publishedYear}</span>
                  )}
                  {item.publishedMonth && (
                    <span>Published month: {item.publishedMonth}</span>
                  )}
                  {item.publishedDay && (
                    <span>Published day: {item.publishedDay}</span>
                  )}
                </div>
              </div>
              <div className="checkbox-container">
                <span>select: </span>
                <input
                  type="checkbox"
                  id={item.uid}
                  checked={isChecked}
                  onChange={handleCheckboxClick}
                />
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Cards
