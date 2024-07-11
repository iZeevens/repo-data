import './pagination.scss'
import { Comics } from '../../interfaces/searchTypes/searchTypes'

function Pagination({ elements }: { elements: Comics[] }) {
  console.log(elements)

  return (
    <div className="pagination">
      <span className="pagination-index">1</span>
      <span className="pagination-index">2</span>
      <span className="pagination-index">3</span>
      <span className="pagination-index">4</span>
      <span className="pagination-index">5</span>
    </div>
  )
}

export default Pagination
