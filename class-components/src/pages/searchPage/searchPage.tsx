// import { fetchData } from "../../services/apiService";
import { Search } from "../../components/search/search";

function SearchPage() {
  const throwError = () => {
    throw new Error('Error detected')
  }

  return (
    <>
      <div className="top-section-wrapper">
        <button className="btn btn-error" onClick={throwError}>
          Throw Error
        </button>
        <Search />
      </div>
    </>
  )
}

export default SearchPage
