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
import { ChangeEvent } from 'react'
import useTheme from '../../hooks/useTheme'

function Cards() {
  const [theme] = useTheme()
  const router = useRouter()
  const dispatch = useDispatch()
  const { data, isLoading, currentPage, cardsDetails } = useSelector(
    (state: RootState) => state.search
  )
  const [searchByUid] = useGetComicsByUidMutation()

  const lastIndexElems = 5 * (currentPage + 1)
  const firstIndexElems = lastIndexElems - 5

  const elementsPagination = data?.comics.slice(firstIndexElems, lastIndexElems)

  const handleCardClick = (id: string) => {
    router.push(`/details/${id}?page=${currentPage + 1}`)
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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        elementsPagination &&
        elementsPagination.map((item) => {
          const isChecked =
            cardsDetails?.some((card) => card.uid === item.uid) || false

          return (
            <div className={`card-comics card-comics-${theme}`} key={item.uid}>
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
