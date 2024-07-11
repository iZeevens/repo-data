import './pagination.scss'
// import { useState } from 'react'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

function Pagination({ elements }: { elements: Comics[] }) {
  // const [page, setPage] = useState(1)

  const elementsPerPage = Math.ceil(elements.length / 5)

  const lastIndexElems = elementsPerPage * 1
  const firstIndexElems = lastIndexElems - elementsPerPage

  console.log(firstIndexElems)

  return (
    <div className="pagination">
      {Array.from({ length: elementsPerPage }, (_, index) => (
        <span
          key={index}
          className={`pagination-item ${index === 0 ? 'active-page' : ''}`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  )
}

export default Pagination
