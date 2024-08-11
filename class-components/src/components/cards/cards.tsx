'use client'

import styles from './cards.module.scss'
import { useRouter } from 'next/router'
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

  const lastIndexElems = 5 * Number(currentPage)
  const firstIndexElems = lastIndexElems - 5

  if (!data.comics) return null

  const elementsPagination = data?.comics.slice(firstIndexElems, lastIndexElems)

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
    <div className={styles['cards-continer']}>
      {elementsPagination && elementsPagination.length === 0 ? (
        <div>Elements Not Found</div>
      ) : (
        elementsPagination.map((item) => {
          const isChecked =
            cardsDetails?.some((card) => card.uid === item.uid) || false

          return (
            <div className={styles['card-comics']} key={item.uid}>
              <div onClick={() => handleCardClick(item.uid!)}>
                <span className={styles['comics-title']}>{item.title}</span>
                <div className={styles['comics-continer']}>
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
              <div className={styles['checkbox-container']}>
                <span>Select: </span>
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
