import './styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/searchPage/searchPage'
import NotFound from './pages/404/404'
import DetailsCard from './components/detailsCard/detailsCard'

// Главный компонент внутри которого будут распологаться остальные компоненты

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />}>
          <Route path="details" element={<DetailsCard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
