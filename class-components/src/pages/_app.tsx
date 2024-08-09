import '../styles/index.scss'
import StoreProvider from './StoreProvider'
import { ThemeProvider } from '../context/ThemeProvider'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <StoreProvider>
        <div className={`App`}>
          <Component {...pageProps} />
        </div>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default MyApp
