import './styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/searchPage/searchPage'
import NotFound from './pages/404/404'

// Главный компонент внутри которого будут распологаться остальные компоненты

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
