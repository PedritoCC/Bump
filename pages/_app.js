import { ContextProvider } from '../components/UserContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
