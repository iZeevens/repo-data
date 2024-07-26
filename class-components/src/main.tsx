import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './components/errorBoundery/errorBoundery.tsx'
import { ThemeProvider } from './context/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    </ThemeProvider>
)
