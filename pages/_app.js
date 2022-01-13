import '../styles/globals.css'
import Header from '../Components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Header/>
    </>
  )
}

export default MyApp
