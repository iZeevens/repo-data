'use client'

import './selectedItemsWindow.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeCardDetails } from '../../lib/reducers/searchSlice'
import { RootState } from '../../lib/store'
import { CardDetailsData } from '../../interfaces/cardsTypes/cardsTypes'

function SelectedItemsWindow() {
  const { cardsDetails } = useSelector((state: RootState) => state.search)
  const dispatch = useDispatch()

  const unSelectHandler = () => {
    dispatch(removeCardDetails([]))
  }

  const convertToCSV = (array: CardDetailsData[]) => {
    function filterData(data: CardDetailsData) {
      return {
        title: data.title,
        numberOfPages: data.numberOfPages,
        stardateFrom: data.stardateFrom,
        stardateTo: data.stardateTo,
        yearFrom: data.yearFrom,
        yearTo: data.yearTo,
        characters:
          data.characters &&
          data.characters
            .map(
              (character) =>
                `name: ${character.name} | gender: ${character.gender} | year of birth: ${character.yearOfBirth} | year of death: ${character.yearOfDeath}`
            )
            .join(' && '),
        photonovel: data.photonovel,
        adaptation: data.adaptation,
        uid: data.uid,
      }
    }

    let csvContent = ''
    let titleKeys = null
    const result = []

    titleKeys = Object.keys(filterData(array[0]))
    result.push(titleKeys)

    array.forEach((item) => {
      result.push(Object.values(filterData(item)))
    })

    result.forEach((row) => {
      csvContent += row?.join(';') + '\n'
    })

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' })
    return URL.createObjectURL(blob)
  }

  return (
    <>
      {cardsDetails && cardsDetails.length > 0 ? (
        <div className="selected-items-window">
          <span className="selected-items-counter">
            {cardsDetails?.length} items are selected
          </span>
          <button
            className="selected-items-unselect btn"
            onClick={unSelectHandler}
          >
            Unselect all
          </button>
          <button className="selected-items-download btn">
            <a
              href={convertToCSV(cardsDetails)}
              download={`comics_${cardsDetails.length}.csv`}
            >
              Download
            </a>
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default SelectedItemsWindow
